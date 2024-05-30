import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("Hellosss typescript + Node.js + Express!!!")
})


app.get("/review", (req,res) => {
    res.send("Reviewing legal document")
})

app.get("/generate", (req,res) => {
    res.send("generating legal document")
})

app.get("/research", (req,res) => {
    res.send("Researching Legal documents")
})

app.listen(PORT, () => {
    console.log(`Server runnning on ${PORT}`)
})