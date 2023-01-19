import { Schema } from "mongoose";

export interface UserObj {
    _id: string;
    email: string;
    username: string;
    password: string;
}
