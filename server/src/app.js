import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import productRoute from "./routes/product.routes.js";
import categoryRoute from "./routes/category.routes.js";
import collectionRoute from "./routes/collection.routes.js";
import variantRoute from "./routes/variant.routes.js";
import adminRoute from "./routes/admin.routes.js";

const app = express();

// Security
app.use(helmet());
app.use(cors({
    origin: process.env.NODE_ENV === "production" ? process.env.FRONTEND_URL : "*",
    credentials: true,
}));

// Body Parsing & Logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/collection", collectionRoute);
app.use("/api/variant", variantRoute);
app.use("/api/admin", adminRoute);

export default app;
