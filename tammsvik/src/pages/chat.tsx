import React, { useState } from "react";
import { CallChatGPT } from "../helpers/chatGPTService"
import styles from "./chat.module.css";

export default function Chat(): JSX.Element {
  const [animalInput, setAnimalInput] = useState<string>("");
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await CallChatGPT(animalInput);

      const data = response.data;
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
    setLoading(false);
  }
  return (

    <div>
      <main className={styles.main}>
        {(loading) ?
          <svg className={styles.spinner} viewBox="0 0 50 50">
            <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
          :
          <img src="/dog.png" className={styles.icon} />
        }
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          {/* <input type="checkbox"/> */}
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div >
  );
}