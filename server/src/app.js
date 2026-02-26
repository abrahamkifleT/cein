import express from "express";
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import userRoute from "./routes/user.routes.js"
import productRoute from "./routes/product.routes.js"


const app = express();


// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);

export default app;

