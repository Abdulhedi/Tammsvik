export async function askQuestion(question: string) {
  try {
    let results = await fetch(`https://api.openai.com/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer sk-proj-Ji2FUIkMUVLetUJxXNM4T3BlbkFJeejjqkC2x0w5Dky5KCOJ`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      }),
    });
    if (results.ok) {
      return results.json();
    } else {
      console.log("fail", await results.text());
      return null;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}