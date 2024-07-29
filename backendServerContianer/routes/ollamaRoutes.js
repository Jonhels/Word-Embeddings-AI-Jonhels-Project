const express = require("express");
const router = express.Router();
const { ollamaChat } = require("../controllers/ollamaController");

router.post("/chat", ollamaChat);

module.exports = router;
