import { Router } from "express";
import { loginPost, loginGet, signupGet, signupPost  } from "../controllers/auth.controller";

const router = Router();

router.get("/login", loginGet);
router.post("/login", loginPost);

router.get("/signup", signupGet);
router.post("/signup", signupPost);

export { router as authRoutes };
