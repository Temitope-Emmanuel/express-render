import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("Hellosss typescript + Node.js + Express!!!")
})


app.gett("/review", (req,res) => {
    res.send("Reviewing legal document")
})

app.gett("/generate", (req,res) => {
    res.send("generating legal document")
})

app.gett("/research", (req,res) => {
    res.send("Researching Legal documents")
})

app.listen(PORT, () => {
    console.log(`Server runnning on ${PORT}`)
})