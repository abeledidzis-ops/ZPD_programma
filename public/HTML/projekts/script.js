import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAIcbCOI6fVeiPh_hczBrT4qq2kZxFokFk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
document.getElementById("izvade").innerHTML = result.response.text();