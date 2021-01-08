import { Request, Response } from "express";

export const indexGet = (req: Request, res: Response) => {
    return res.render("index", { message: "This is rocket league" });
};
