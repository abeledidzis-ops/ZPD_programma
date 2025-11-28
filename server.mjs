import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(express.static("public"));  // Serve frontend files

// Google AI Setup

const genAI = new GoogleGenerativeAI("AIzaSyDtW_XID4bvAB_zW0ZhugmkbC4m_c7JedQ");

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent("What is 2 + 2?");
  console.log("Startup test:", result.response.text()); // should log "4"
}
main();


app.post("/api/ask", async (req, res) => {
  try {
    const { prompt } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);

    res.json({ reply: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});