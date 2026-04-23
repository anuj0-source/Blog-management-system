import app, { connectMongo } from "./app.js";

let isConnected = false;

export default async function handler(req, res) {
  try {
    if (!isConnected) {
      await connectMongo();
      isConnected = true;
    }
    return app(req, res);
  } catch (error) {
    console.error("Database connection error:", error.message);
    return res.status(500).json({ message: "Database connection failed" });
  }
}
