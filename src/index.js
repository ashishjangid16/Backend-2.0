import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express(); // ✅ Define the app

dotenv.config({
  path: './env'
});

console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});

  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
  });
