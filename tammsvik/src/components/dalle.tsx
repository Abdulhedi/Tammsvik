import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";


export interface DalleInput{
    persona:string;
}

export default function Dalle(persona: DalleInput): JSX.Element{

    return(
        <div>
            Dalle
        </div>
    )
}