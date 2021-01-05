import { Router } from "express";
import { indexController } from "../controllers/generic.controller";
import { loginGet, loginPost } from "../controllers/auth.controller";

const router = Router();

router.get("/", indexController);
router.get("/login", loginGet);
router.post("/login", loginPost);

export { router as genericRoutes };
