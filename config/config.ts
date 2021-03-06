import compression from "compression";
import express from "express";
import { urlencoded } from "body-parser";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), "./config/.env") });
export const app = express();
export const PORT = 1100 || process.env.PORT;

app.use(compression());
app.set("view engine", "ejs");
app.use(urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "../views/pages"));
