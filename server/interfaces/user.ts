import { Types } from 'mongoose';

export interface UserObj {
  _id: Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  grafURL: string;
  grafPort: string;
  grafUsername: string;
  grafPassword: string;
  kubeviewPort: string;
  customUID: string;
  alertsUID: string;
}
