import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("Hellosss typescript + Node.js + Express!!!")
})

app.listen(PORT, () => {
    console.log(`Server runnning on ${PORT}`)
})

app.post("/review", (req,res) => {
    res.send("Reviewing legal document")
})

app.post("/generate", (req,res) => {
    res.send("generating legal document")
})

app.post("/research", (req,res) => {
    res.send("Researching Legal documents")
})