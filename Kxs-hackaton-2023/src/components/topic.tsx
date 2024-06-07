import React, { useState } from "react";
import { Button, TextField, Box } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export interface ITopic {
    setTopic: (topic: string) => void;
}

export default function Topic(props: ITopic): JSX.Element {
    const [topicValue, setTopicValue] = useState<string>("");

    async function createTopic(): Promise<void> {
        props.setTopic(topicValue);
    }

    return (
        <Box sx={{ marginTop: "20px" }}>
            <TextField
                placeholder="Topic"
                type="text"
                onChange={(event) => { setTopicValue(event.target.value) }}
            />
            <Button onClick={createTopic}>
                <AddCircleOutlineOutlinedIcon /> Create personas
            </Button>
        </Box>
    );
}
