import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import saveRouter from "./routes/msgaccept.js";

dotenv.config();

const app = express(); //allows frontend port to talk to backend port (for abhinigger)
app.use(cors());
app.use(express.json());

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connected to MONGODB");
} catch (error) {
  console.error(error.message);
}

app.use("/save", saveRouter);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server began at port ${PORT}`));
