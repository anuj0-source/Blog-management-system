import app, { connectMongo } from "./app.js";

const PORT = process.env.PORT || 3000;

connectMongo()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
