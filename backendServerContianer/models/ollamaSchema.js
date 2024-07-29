const mongoose = require("mongoose");
// Schema is for saving the chat history in the database
const ollamaSchema = new mongoose.Schema({
  role: String,
  content: String,
  response: String,
});

module.exports = mongoose.model("LlamaChat", ollamaSchema);
