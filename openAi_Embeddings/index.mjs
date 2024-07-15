import OpenAI from "openai/index.mjs";
import dotenv from "dotenv";
dotenv.config();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: "Dog!",
  });
  console.log(embedding); //Response object
  console.log("Embedding property:", embedding.data[0].embedding); // Embedding property
}
main();
