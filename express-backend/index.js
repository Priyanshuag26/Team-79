const express = require("express");
const cors = require("cors");
const { QuestionRouter } = require("./Routes/question.routes");
const { connection } = require("./db");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI('AIzaSyDMOucq5Zuz_DmfuolzTxUzKsl7jrx3klg');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/questions", QuestionRouter)

app.get("/", async(req, res) =>{
    res.setHeader("Content-type", "text/html");
    res.send("<h1>Welcome to the Interview Question Server Api</h1>")
})

app.listen(PORT, async() =>{
    try {
        await connection;
        console.log("Connected to the database");
        console.log("Server is Running on port 8000");
    } catch (error) {
        console.log(error);
    }
})
app.post('/bot/chat', async (req, res) => {
    try {
  const prompt = req.query.prompt;
  console.log(prompt);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const data = response.text();
  if (data) {
    if (data) {
      return res.status(200).json(data);
    }
  }
} catch (err) {
  console.error(err);
  return res.status(404).json({
    message: err.message,
  });
}
});