
import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import Persona from "../components/persona";
import Dalle from "../components/dalle";
import Topic from "../components/topic";



export default function Bravo(): JSX.Element {
    const [persona1, setPersona1] = useState<string>("");
    const [persona2, setPersona2] = useState<string>("");
    const [topic, setTopic] = useState<string>("");
     
    return (
        <div>
            <Topic setTopic={setTopic}/>
            <Persona isPro={true} topic={topic} setPersona={setPersona1} />
            <Persona isPro={false} topic={topic} setPersona={setPersona2} />
            <Dalle persona={persona1} />
            <Dalle persona={persona2} />
        </div>
    ) 
}