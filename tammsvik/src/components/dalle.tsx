import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";


export interface DalleInput{
    persona:string;
}

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const response = async () => {await openai.createImage({
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
});
};
  const image_url = response.data.data[0].url;

export default function Dalle(persona: DalleInput): JSX.Element{

    return(
        <div>
            Dalle
        </div>
    )
}