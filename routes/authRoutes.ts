import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    return res.render("index", { user: "This is the rocket leageu" });
});

export { router as authRoutes };
