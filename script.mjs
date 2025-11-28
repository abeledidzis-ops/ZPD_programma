import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAIcbCOI6fVeiPh_hczBrT4qq2kZxFokFk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "kāda ir pitagora teorēmas formula";

const result = await model.generateContent(prompt);
console.log(result.response.text());