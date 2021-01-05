import { Request, Response } from "express";

export const indexController = (req: Request, res: Response) => {
    return res.render("index", { message: "This is rocket league" });
};
