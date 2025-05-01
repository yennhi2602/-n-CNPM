import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectToDb } from "./src/config/db.js";
import authRoutes from "./src/routes/User.js";

// Load biến môi trường
dotenv.config();

// Khởi tạo app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Kết nối MongoDB
connectToDb();

// Route cơ bản
app.get("/", (req, res) => {
    res.send("Welcome");
});

// Routes
app.use("/api/auth", authRoutes);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});