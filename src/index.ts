import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import exampleRouter from "./routes/router";
import logging from "./middlewares/logging";
import { AppDataSource } from "./config/data-source";

// Load environment variables
dotenv.config();

// Initialize Data Source (e.g., PostgreSQL)
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

const app = express();

// Logging environment and config values
console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("App Name =", process.env.APP_NAME);
console.log("Mail Server =", process.env.MAIL_HOST);
console.log("Mail Password =", process.env.MAIL_PASSWORD);

// Middlewares
if (process.env.NODE_ENV === "development") {
    app.use(morgan("tiny"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logging);

// Routes
app.use("/api/example", exampleRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
