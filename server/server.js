require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  const options = {
    method: "POST",
    url: "https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY, // Store your RapidAPI key in .env
      "x-rapidapi-host":
        "cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      messages: [{ role: "user", content: userMessage }],
      model: "gpt-4o", // Use the model specified in your API
      max_tokens: 100,
      temperature: 0.9,
    },
  };

  try {
    const response = await axios.request(options);
    const botMessage = response.data.choices[0].message.content; // Adjust based on API response structure
    res.json({ message: botMessage });
  } catch (error) {
    console.error(
      "Error communicating with RapidAPI GPT-4 API:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: "Error communicating with RapidAPI GPT-4 API" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
