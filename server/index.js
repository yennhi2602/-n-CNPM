import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectToDb } from "./src/config/db.js";
import authRoutes from "./src/routes/User.js";
dotenv.config();
//database
connectToDb();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));



app.get('/', (req, res) =>{
    res.send("Welcome")
  })
  

  // Routes
app.use("/auth/api", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });