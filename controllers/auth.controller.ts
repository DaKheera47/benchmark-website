import { Request, Response } from "express";

export const loginGet = (req: Request, res: Response) => {
    return res.render("login", { message: "This is rocket league" });
};

export const loginPost = (req: Request, res: Response) => {
    console.log(req.body);
    return res.render("login", {
        message: `username: ${req.body.username} password: ${req.body.password}`,
    });
};
