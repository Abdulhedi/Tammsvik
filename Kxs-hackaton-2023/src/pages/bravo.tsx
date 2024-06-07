import React, { useState } from "react";
import Persona from "../components/persona";
import Dalle from "../components/dalle";
import Topic from "../components/topic";

import Grid from '@mui/material/Grid';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Bravo(): JSX.Element {
    const [persona1, setPersona1] = useState<string>("");
    const [persona2, setPersona2] = useState<string>("");
    const [topic, setTopic] = useState<string>("");

    return (
        <div>
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <Topic setTopic={setTopic} />
                </Grid>
                <Grid item xs={6}>
                    <Persona isPro={true} topic={topic} setPersona={setPersona1} />
                </Grid>
                <Grid item xs={6}>
                    <Persona isPro={false} topic={topic} setPersona={setPersona2} />
                </Grid>
                <Grid item xs={6}>
                    <Dalle persona={persona1} />
                </Grid>
                <Grid item xs={6}>
                    <Dalle persona={persona2} />
                </Grid>
            </Grid>
            </div>
    );
                 
}