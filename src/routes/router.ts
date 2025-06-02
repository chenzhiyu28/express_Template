import express from "express";

const router = express.Router();

// Sample GET route
router.get("/", (req, res) => {
    res.send("Hello from example router");
});

export default router;
