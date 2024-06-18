
import { Configuration, OpenAIApi } from "openai";
import { StringResponse } from "../models/StringResponse";


const configuration = new Configuration({
    apiKey: "sk-proj-Ji2FUIkMUVLetUJxXNM4T3BlbkFJeejjqkC2x0w5Dky5KCOJ",
});
const openai = new OpenAIApi(configuration);


export async function CallAPI(input: string, generateAnimalPrompt = true): Promise<any> {
    let result: StringResponse = { data: {} };

    input = input || "";
    if (input.trim().length === 0) {
        result.status = 500;
        result.data.error = {
            message: "Please enter a valid input",
        };
        return result;
    }

    try {
        const completion = await openai.createImage({
            prompt: generateAnimalPrompt ? generatePrompt(input) : input,
            n: 1,
            size: "1024x1024"
        });
        result.status = 200;
        result.data.result = completion.data.data[0].b64_json;
    } catch (error:any) {
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
