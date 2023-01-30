import { Types } from 'mongoose';

export interface UserObj extends Document {
  _id: Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  picture: string;
  grafURL: string;
  grafUsername: string;
  grafPassword: string;
  grafUID: string;
}
