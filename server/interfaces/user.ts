import { Schema, Types } from "mongoose";

export interface UserObj {
    _id: Types.ObjectId;
    email: string;
    username: string;
    password: string;
}
