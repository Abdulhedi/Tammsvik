import React, { useState } from "react";
import { CallChatGPT } from "../helpers/chatGPTService";
import { Emotions } from "../helpers/Emotions";
import { setLampToColor } from "../helpers/hueHelper";
import styles from "./chat.module.css";
import DefaultIcon from '../icons/default.svg'
import { SmileySpinner } from "./smileySpinner";

const capitalize = (toCapitalize?: string) => {
  return toCapitalize && toCapitalize.length ? toCapitalize[0].toUpperCase() + toCapitalize.substring(1) : undefined;
}

export default function Echo(): JSX.Element {
  const [messageInput, setMessageInput] = useState("");
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(DefaultIcon);

  async function onSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await CallChatGPT(messageInput);

      const data = response.data;
      if (response.status !== 200) {
        throw data.error ||
          new Error(`Request failed with status ${response.status}`);
      }

      const emotion = data.result && Emotions.find(({ emotion }) => emotion === data.result!.trim());
      console.log(emotion)
      const { color = undefined, icon = undefined } = emotion ? emotion : {};

      color && setLampToColor(1, color);
      color && setLampToColor(2, color);
      color && setLampToColor(3, color);
      icon && setIcon(icon);

      setResult(data.result);
      setMessageInput("");
    } catch (error) {
      console.error(error);
      // alert(error.message);
    }
    setLoading(false);
  }
  return (
    <div>
      <main className={styles.main}>
        {loading ? (
          <SmileySpinner icon={icon} />
        ) : (
          <img src={icon} alt="Smiley" />
        )}
        <h3>EmotionDetector™</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter a message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
        <div className={styles.result}>{capitalize(result)}</div>
      </main>
    </div>
  );
}
