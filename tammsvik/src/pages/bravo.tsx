
import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import Persona from "../components/persona";
import Dalle from "../components/dalle";



export default function Bravo(): JSX.Element {
    const [persona1, setPersona1] = useState<string>("");

    return (
        <div>
            <Persona />
            <Dalle persona={persona1} />
        </div>
    ) 
}