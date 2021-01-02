import compression from "compression";
import express from "express";

export const app = express();

export const PORT = 1100 || process.env.PORT;

app.use(compression());
app.set("view engine", "ejs");
