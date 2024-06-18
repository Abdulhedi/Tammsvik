import React, { useState } from "react";
import { askQuestion } from "../helpers/chatHelper";

const Chatgpt: React.FC = () => {
  const [output, setOutput] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const handleAskQuestion = async () => {
    const updatedOutput = `${output}\nMe: ${question}`;
    setOutput(updatedOutput);

    try {
      const data = await askQuestion(question);
      const response = data?.choices?.[0]?.message?.content || "Error...";
      setOutput((prevOutput) => `${prevOutput}\nChat GPT: ${response}`);
    } catch (error) {
      console.error("Error asking question:", error);
      setOutput((prevOutput) => `${prevOutput}\nChat GPT: Error...`);
    }
  };

  return (
    <div className="chatWrapper">
      <h1>Chat GPT exempel</h1>
      <textarea id="response" disabled value={output}></textarea>
      <input
        type="text"
        id="question"
        placeholder="Skriv din fråga här..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAskQuestion}>Fråga!</button>
    </div>
  );
};

export default Chatgpt;
