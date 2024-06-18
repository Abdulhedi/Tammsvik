
import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: "sk-proj-Ji2FUIkMUVLetUJxXNM4T3BlbkFJeejjqkC2x0w5Dky5KCOJ",
});
const openai = new OpenAIApi(configuration);

export interface ChatGPTResult {
    status?: number;
    data: {
        result?: string;
        error?: {
            message?: string;
        };
    };
};


export async function CallChatGPT(input: string, generateAnimalPrompt = true): Promise<ChatGPTResult> {
    let result: ChatGPTResult = { data: {} };

    input = input || "";
    if (input.trim().length === 0) {
        result.status = 500;
        result.data.error = {
            message: "Please enter a valid input",
        };
        return result;
    }

    try {

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: generateAnimalPrompt ? generatePrompt(input) : input }],
        });

        if(completion.data.choices[0].message != null)

        result.data.result = completion.data.choices[0].message.content;

        result.status = 200;

    } 
    catch (error: any) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            result.status = error.response.status;
            result.data.error = error.response.data;
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            result.status = 500;
            result.data.error = {
                message: 'An error occurred during your request.',
            };
        }

    }
    return result;
}

function generatePrompt(animal: string): string {
    const capitalizedAnimal =
        animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    return `Suggest three names for an animal that is a superhero.
    
    Animal: Cat
    Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
    Animal: Dog
    Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
    Animal: ${capitalizedAnimal}
    Names:`;
}
