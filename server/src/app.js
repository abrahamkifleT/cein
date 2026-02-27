import express from "express";
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import userRoute from "./routes/user.routes.js"
import productRoute from "./routes/product.routes.js"
import categoryRoute from "./routes/category.routes.js"
import collectionRoute from "./routes/collection.routes.js"
import variantRoute from "./routes/variant.routes.js"

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
app.use("/api/category", categoryRoute);
app.use("/api/collection", collectionRoute);
app.use("/api/variant", variantRoute)

export default app;

