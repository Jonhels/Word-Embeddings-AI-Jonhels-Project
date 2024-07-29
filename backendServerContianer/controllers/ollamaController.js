const axios = require("axios");
const llamaChat = require("../models/ollamaSchema");

// målet er å lage an bot som henter informasjon fra databasen og bruker det i samtalen.
// Det er ingen mål i at den skal huske siste meldingen.
// Akkuratt nå er det en enkel bot som svarer på et spørsmål om gangen.

const ollamaChat = async (req, res) => {
  console.log("ollamaChat", req.body);

  async function callModel() {
    try {
      const response = await axios.post("http://127.0.0.1:11434/api/chat", {
        messages: [req.body],
        model: "llama3.1",
        stream: false,
      });
      return response.data;
    } catch (error) {
      console.log("Error in callModel:", error);
      return null;
    }
  }

  const response = await callModel();
  if (response) {
    return res.status(200).json(response);
  } else {
    return res
      .status(500)
      .json({ message: "Could not connect to ollama model" });
  }
};

module.exports = { ollamaChat };
