import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export const sendToDatabase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const User = mongoose.model<mongoose.Document>('User');

    const { uid, user } = res.locals;
    console.log('user: ', user);
    console.log('uid: ', uid);

    const saveUid = await User.findOneAndUpdate();

    // console.log('res.locals.queryData: ', res.locals.queryData);
    next();
  } catch (error) {
    console.log('error in sendToDatabase');
    next(error);
  }
};
