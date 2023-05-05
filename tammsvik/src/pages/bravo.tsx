
import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import Persona from "../components/persona";
import Dalle from "../components/dalle";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';





export default function Bravo(): JSX.Element {
    const [persona1, setPersona1] = useState<string>("");

    return (
        <div>
            <Persona />
            <Dalle persona={persona1} />
        </div>
    ) 
}