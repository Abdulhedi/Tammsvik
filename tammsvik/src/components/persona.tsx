import { Configuration, OpenAIApi } from "openai";
import React, { useState, useEffect } from "react";
import { Button, TextField, Box } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import { indigo } from '@mui/material/colors';
import topic from "./topic";

const color = indigo[900];

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export interface IPersonaProps {
    setPersona: (persona: string) => void;
    topic?: string;
    isPro?: boolean
};

export default function Persona(props: IPersonaProps): JSX.Element {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [persona, setPersona] = useState<string>("");
    const [creatingPersona, setCreatingPersona] = useState<boolean>(false);

    // useEffect(() => {
    //     if (name !== "" && persona !== ""){

    //     }

    // }, [name, persona])

    useEffect(()=> {
        console.log("useeffect körs")
        if(persona === ""){
            console.log("kör!")
            createPersona()
        }
    },[props.topic])

    async function createPersona(): Promise<void> {
        if (name !== "" && description !== "") {

            setCreatingPersona(true);
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `Create a persona description from the following, name ${name}, is ${props.isPro ? " is pro" : "is against"} ${props.topic} and personel description ${description}. with a maximum of 400 characters` }],
            });

            if (completion.data.choices[0].message != null) {
                props.setPersona(completion.data.choices[0].message.content);
                setPersona(completion.data.choices[0].message.content)
            }
            setCreatingPersona(false);
        }
    }

    return (
        <div>
            <TextField placeholder="Name" required value={name} onChange={(event) => { setName(event.target.value) }} />
            <TextField placeholder="Description" value={description} onChange={(event) => { setDescription(event.target.value) }} />
            {/* <Button onClick={createPersona}><AddCircleOutlineOutlinedIcon /> Create </Button> */}
            <Box 
            sx={{
                bgcolor: indigo[900],
                borderRadius: 3,
                padding: 2,
                width: '500px',
                xheight: '200px',
                color: 'white',
                margin: "0 auto",
            }}>
                {creatingPersona ?
                    <LinearProgress />
                    :
                    persona === "" ? <i>Create persona</i> : persona
                }
            </Box>
        </div>
    )
}
