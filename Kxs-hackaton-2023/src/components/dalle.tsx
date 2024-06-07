import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import noimage from "../assets/noimage.png";
export interface DalleInput {
  persona: string;
}

const configuration = new Configuration({
  apiKey: "PUT API KEY HERE",
});

const openai = new OpenAIApi(configuration);

export default function Dalle(props: DalleInput): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const [environment, setEnvironment] = useState("");

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: `Create a realistic image of a superhero in a ${environment} environment. ${props.persona}`,
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
          <MenuItem value={"Plaza"}>Plaza</MenuItem>
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
          <img src={noimage} alt="Generated Image" />
        </div>
      )}
    </div>
  );
}
