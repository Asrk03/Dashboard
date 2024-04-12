import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
mongoose.connect("mongodb+srv://dummyUser:40WCZdsp2xJUTVmI@cluster0.ccflqch.mongodb.net/dashboard");
app.use(cors())
const schema = new mongoose.Schema({
  end_year: String,
  intensity: String,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: String,
  pestle: String,
  source: String,
  title: String,
  likelihood: String,
});

const model = mongoose.model("dataset", schema);
app.get("/api/data", async (req, res) => {
    try {
        const data = await model.find({});
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => {
  console.log(`App is running at http://localhost:3000/api/data`);
});