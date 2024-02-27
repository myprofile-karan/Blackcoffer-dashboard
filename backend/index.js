import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import mockData from "./mockData.json" assert { type: "json" };
import { EnergyModel } from "./models/dataSchema.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log("MongoDB Connected"))
  .catch((err) => console.log("mongo error", err));

const insertData = async () => {
  try {
    await EnergyModel.insertMany(mockData);
    console.log("Data inserted successfully");
  } catch (error) {
    console.log(error);
  }
};
insertData();

app.get("/api/mockdata", async (req, res) => {
  try {
    const data = await EnergyModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
