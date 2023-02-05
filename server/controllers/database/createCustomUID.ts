import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

// add cluster...
// req.body:  {
//   grafanaPort: '3000',
//   grafanaUsername: 'sangs-username',
//   grafanaPassword: 'intern',
//   kubeviewPort: '8080',
//   username: 'johnwick'
//   }

export const createCustomUID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const User = mongoose.model<mongoose.Document>('User');

    const { ssUsername } = req.body;
    const { uid } = res.locals;

    await User.findOneAndUpdate( 
      { username: ssUsername }, 
      { customUID: uid });

    return next();
  } catch (err) {
    console.log('error in createCustomUID: ', err);
    return next(err);
  }
};
