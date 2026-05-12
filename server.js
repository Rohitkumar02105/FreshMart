import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("Mongo Error:", err);
});

app.get("/api/products", (req, res) => {
  res.json([
    { name: "Milk", price: 50 },
    { name: "Bread", price: 40 }
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);