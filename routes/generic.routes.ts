import { Router } from "express";
import { indexGet } from "../controllers/generic.controller";

const router = Router();

router.get("/", indexGet);

export { router as genericRoutes };
