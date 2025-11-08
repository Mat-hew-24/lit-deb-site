import mongoose, { Mongoose } from "mongoose";

const saveSchema = new mongoose.Schema({
  msg: { type: String, required: true },
});

export default mongoose.model("Save", saveSchema);
