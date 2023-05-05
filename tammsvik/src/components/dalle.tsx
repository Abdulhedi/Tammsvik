import { Configuration, OpenAIApi } from "openai";
import { resolve } from "path";
import React, { useState } from "react";


export interface DalleInput{
    persona:string;
}

const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);


export default function Dalle(props: DalleInput): JSX.Element {

    const generateImage = async () => {
        const response = await openai.createImage({
          prompt: props.persona,
          n: 1,
          size: "1024x1024",
        });
        return response.data.data[0].url;
      };
      
  const [imageUrl, setImageUrl] = useState("");
  const handleGenerateClick = async () => {
    let url = await generateImage();
    if (url !== undefined) {
        setImageUrl(url);
      }
  };

  return (
    <div>
      <button onClick={handleGenerateClick}>Generate Image</button>
      {imageUrl && <img src={imageUrl} alt="Generated Image" />}
    </div>
  );
}