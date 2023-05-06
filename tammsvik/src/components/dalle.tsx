import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { padding } from "@mui/system";

export interface DalleInput {
  persona: string;
}

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default function Dalle(props: DalleInput): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const [environment, setEnvironment] = useState("");

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: props.persona,
      n: 1,
      size: "512x512",
    });
    return response.data.data[0].url;
  };
  const handleGenerateClick = async () => {
    console.log(props.persona);
    let url = await generateImage();
    if (url !== undefined) {
      setImageUrl(url);
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Environment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={environment}
          label="Miljö"
          onChange={(event) => {
            setEnvironment(event.target.value);
          }}
        >
          <MenuItem value={"Meadow"}>Meadow</MenuItem>
          <MenuItem value={"Office"}>Office</MenuItem>
          <MenuItem value={"Urban City"}>Urban City</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleGenerateClick} variant="contained" color="success">
        Illustrate Person
      </Button>
      {imageUrl ? (
        <div>
          <img src={imageUrl} alt="Generated Image" />
        </div>
      ) : (
        <div>
          <h1>LOADING PICTURE </h1>
        </div>
      )}
    </div>
  );
}
