import { userModel } from "../models/index.model";

interface User {
    fullName: String;
    email: String;
    password: String;
}

export const createNewUser = async (user: User) => {
    const newUser = await userModel.create(user);
    return newUser;
};

export const findAllUsers = async () => {
    return await userModel.find();
};
