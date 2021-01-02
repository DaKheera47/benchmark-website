import { Router, Request, Response, NextFunction } from "express";
const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.render("index", { user: "This is the rocket league" });
});

export { router as authRoutes };
