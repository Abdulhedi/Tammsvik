import { Configuration, OpenAIApi } from "openai";
import React, { useState, useEffect } from "react";

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export interface IPersonaProps {
    setPersona?: (persona: string) => void;
    personaIsReady?: () => boolean;
    topic?: string;
    isPro?: boolean
};

export default function Persona(props: IPersonaProps): JSX.Element {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [persona, setPersona] = useState<string>("");

    // useEffect(() => {
    //     if (name !== "" && persona !== ""){

    //     }

    // }, [name, persona])

    async function createPersona(): Promise<void> {
        if (name !== "" && description !== "") {


            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `Create a persona description from the following, name ${name}, is ${props.isPro ? " is pro" : "is against"} ${props.topic} and personel description ${description}` }],
            });

            if (completion.data.choices[0].message != null) {
                //props.setPersona(completion.data.choices[0].message.content);
                setPersona(completion.data.choices[0].message.content)
            }
        }
    }

    return (
        <div>
            <input placeholder="Name" name="name" type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
            <input placeholder="Description" name="Description" type="text" value={description} onChange={(event) => { setDescription(event.target.value) }} />
            <button onClick={createPersona}>Create</button>
            <div>{persona}</div>
        </div>
    )
}

// import React, { useState } from 'react';
// import { Box, Button, Form, FormField, TextInput, Grommet } from 'grommet';

// interface PersonaFormProps {
//     onSubmit?: (name: string, age: number, occupation: string) => void;
// }

// const PersonaForm: React.FC<PersonaFormProps> = ({ onSubmit }) => {
//     const [name, setName] = useState<string>('');
//     const [age, setAge] = useState<number>(0);
//     const [occupation, setOccupation] = useState<string>('');

//     const handleSubmit = () => {
//         onSubmit(name, age, occupation);
//         setName('');
//         setAge(0);
//         setOccupation('');
//     };

//     return (

//         <Grommet>
//             <Box align="center" justify="center" pad="large">
//                 <Form onSubmit={handleSubmit}>
//                     <FormField label="Name">
//                         <TextInput value={name} onChange={(event) => setName(event.target.value)} />
//                     </FormField>
//                     <FormField label="Age">
//                         <TextInput type="number" value={age} onChange={(event) => setAge(Number(event.target.value))} />
//                     </FormField>
//                     <FormField label="Occupation">
//                         <TextInput value={occupation} onChange={(event) => setOccupation(event.target.value)} />
//                     </FormField>
//                     <Box direction="row" justify="center" margin={{ top: 'medium' }}>
//                         <Button type="submit" label="Submit" primary />
//                     </Box>
//                 </Form>
//             </Box>
//         </Grommet>
//     );
// };

// export default PersonaForm;
