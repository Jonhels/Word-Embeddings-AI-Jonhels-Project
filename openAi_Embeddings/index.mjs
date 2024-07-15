import OpenAI from "openai/index.mjs";
import dotenv from "dotenv";
dotenv.config();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: "Hello, world!",
  });
  // This will log the embedding.data[0].embedding property. data[0] is used because the API returns an array of embeddings.
  //console.log(embedding); This will log the entire response object.
  console.log(embedding.data[0].embedding); // This will log the embedding property of the response object.
}
main();
