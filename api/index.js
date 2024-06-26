import express from "express";
import cors from 'cors';
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 8090

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
