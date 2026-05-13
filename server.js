import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

const products = [
  {
    name: "Rice",
    price: "₹60/kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
  },
  {
    name: "Milk",
    price: "₹30/litre",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b"
  },
  {
    name: "Apple",
    price: "₹120/kg",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
  },
  {
    name: "Bread",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
  },
  {
    name: "Tomato",
    price: "₹50/kg",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337"
  },
  {
    name: "Eggs",
    price: "₹70/dozen",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03"
  }
];

app.get("/", (req, res) => {
  res.send("FreshMart Backend Running 🚀");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});