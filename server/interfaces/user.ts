import { Types } from 'mongoose';

export interface UserObj extends Document {
  _id: Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  grafPort: string;
  grafUsername: string;
  grafPassword: string;
  kubeviewPort: string;
}
