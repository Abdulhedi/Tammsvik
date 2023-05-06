import React, { useState } from "react";
import { Button, TextField, Box } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import { indigo } from '@mui/material/colors';


export interface ITopic{
    setTopic:(topic : string) => void;
}


export default function topic(props: ITopic): JSX.Element{
    const [topic, setTopic] = useState<string>("");

async function CreateTopic(): Promise<void>{
    props.setTopic(topic);
}

    return(
        <div>
            <TextField placeholder="Topic" type="text" onChange={(event) => { setTopic(event.target.value) }} />
            <Button onClick={CreateTopic}  sx={{
                bgcolor: indigo[900],
                borderRadius: 3,
                padding: 2,
                width: '200px',
                xheight: '200px',
                color: 'white'
            }} >Submit</Button>
        </div>
    )
}