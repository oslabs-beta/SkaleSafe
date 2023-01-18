import { Schema } from "mongoose";

interface User {
    _id: string,
    email: string,
    username: string,
    token: string
}
