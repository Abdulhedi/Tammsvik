import React, { useEffect, useState } from "react";
import { askQuestion } from "../helpers/chatHelper";

const Chat: React.FC<any> = () => {
  const [output, setOutput] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const handleAskQuestion = () => {
    setOutput(`${output} \n Me: ${question}`);

    const data = askQuestion(question);

    data.then((d: any) => {
      if (d) {
        d.choices && setResponse(d.choices[0].message.content);
      } else {
        setResponse("Error...");
      }
    });
  };

  useEffect(() => {
    if (response) setOutput(`${output} \n Chat GPT: ${response}`);
  }, [response]);

  return (
    <div className={"chatWrapper"}>
      <h1>Chat GPT exempel</h1>
      <textarea id={"response"} disabled value={output}></textarea>
      <input
        type="text"
        id={"question"}
        placeholder="Skriv din fråga här..."
        onKeyUp={(e) => {
          setQuestion(e.currentTarget.value);
        }}
      />
      <button onClick={() => handleAskQuestion()}>Fråga!</button>
    </div>
  );
};

export default Chat;
