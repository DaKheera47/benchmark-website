import { Request, Response } from "express";
import { createNewUser } from "../services/auth.service";

export const loginGet = (req: Request, res: Response) => {
    return res.render("login", { message: "This is rocket league" });
};

export const signupGet = (req: Request, res: Response) => {
    return res.render("signup", { message: "This is rocket league" });
};

export const loginPost = async (req: Request, res: Response) => {
    return res.render("login", {
        message: `username: ${req.body.username} password: ${req.body.password}`,
    });
};

export const signupPost = (req: Request, res: Response) => {
    // creating a new user in the db
    createNewUser({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
    });

    return res.render("signup", {
        message: `username: ${req.body.email} password: ${req.body.password}`,
    });
};
