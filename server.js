require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = "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";

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
});

app.listen(3000, () => console.log("Server berjalan di https://hozoowhitehat.github.io/2726282827/AI_KANDURA.html"));
