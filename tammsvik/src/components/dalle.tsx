import { Configuration, OpenAIApi } from "openai";
import { resolve } from "path";
import React, { useEffect, useState } from "react";

export interface DalleInput {
  persona: string;
}

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default function Dalle(input: DalleInput): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const generateImage = async () => {
        const response = await openai.createImage({
          prompt: props.persona,
          n: 1,
          size: "512x512",
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

    generateImage().then((res) => {
      setImageUrl(res);
    });
  }, [input.persona]);

  return (
    <div>
      {imageUrl ? (
        <div>
          <img src={imageUrl} alt="Generated Image" />
        </div>
      ) : (
        <div>
          <h1>LOADING PICTURE </h1>
        </div>
      )}
      {/* <button onClick={test}>Generate Image</button> */}
    </div>
  );
}
