const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message;
  // Simulate a response from OpenAI API
  const botMessage = `This is a mock response to: "${userMessage}"`;

  res.json({ message: botMessage });
});

app.listen(port, () => {
  console.log(`Mock server is running on http://localhost:${port}`);
});
