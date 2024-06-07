export async function askQuestion(question: string) {
  try {
    let results = await fetch(`https://api.openai.com/v1/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `PUT API KEY HERE`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: question,
      }),
    });
    if (results.ok) {
      return results.json();
    } else {
      console.log("fail");
      return null;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}
