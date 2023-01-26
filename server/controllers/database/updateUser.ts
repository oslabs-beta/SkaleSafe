import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

const updateUser = (req: Request, res: Response, next: NextFunction) => {

    // grab userID from cookies, to assign Grafana info to their DB document.
  const userId = req.cookies.userId;
  const grafURL = req.body.grafURL;
  const grafUsername = req.body.grafUsername;
  const grafPassword = req.body.grafPassword;
  const grafUID = req.body.grafUID;

  const User = mongoose.model<mongoose.Document>('User');

  User.findByIdAndUpdate(
    userId,
    {
      $set: {
        grafURL: grafURL,
        grafUsername: grafUsername,
        grafPassword: grafPassword,
        grafUID: grafUID,
      },
    },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(404).json({ message: 'Unable to update user.' });
      }
      return res.status(200).json({ message: 'User updated successfully.' });
    }
  );
};
