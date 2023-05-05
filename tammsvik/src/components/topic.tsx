import React, { useState } from "react";


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
            <input placeholder="Topic" type="text" onChange={(event) => { setTopic(event.target.value) }} />
            <button onClick={CreateTopic} >Submit</button>
        </div>
    )
}