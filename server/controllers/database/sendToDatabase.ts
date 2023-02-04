import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export const sendToDatabase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const User = mongoose.model<mongoose.Document>('User');

    const { uid } = res.locals;
    const { username } = res.locals.user;
    console.log('username: ', username);
    console.log('uid: ', uid);

    const saveUid = await User.findOneAndUpdate(username, { customUID: uid });

    // console.log('res.locals.queryData: ', res.locals.queryData);
    next();
  } catch (error) {
    console.log('error in sendToDatabase: ', error);
    next(error);
  }
};
