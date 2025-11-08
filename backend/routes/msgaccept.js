import express from "express";
import save from "../models/save.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { msg } = req.body;
    const saveMsg = await save.create({ msg });

    res.status(201).json({
      message: "Message Saved",
      data: saveMsg,
    });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

export default router;
