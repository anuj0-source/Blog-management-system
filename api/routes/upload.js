import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

// Multer setup (store temporarily)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    const filePath = req.file.path;

    // 👇 Your line goes here
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "mern_blog",
    });

    // Remove local temp file
    fs.unlinkSync(filePath);

    res.json({ url: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Image upload failed" });
  }
});

export default router;
