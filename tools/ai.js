import { HfInference } from "@huggingface/inference"

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY)

const SYSTEM_PROMPT = `You are an assistant that recieves a list of ingredients and using those ingredients you will have to return a recipe. You can include or exclude a few ingredients, but don't change the list too much. Please return the recipe in markdown format so it is easier to display it on the web.`


export default async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ")
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
      max_tokens: 1024,
    })
    return response.choices[0].message.content
  } catch (err) {
    console.error(err.message)
  }
}