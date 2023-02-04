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

export const createAlertsUID = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // grab userID from cookies, to assign Grafana info to their DB document.
  const username = req.body.username;
  const alertsUID = res.locals.uid;
  console.log('from addcluster middleware', req.body);

  const User = mongoose.model<mongoose.Document>('User');

  User.findOneAndUpdate(
    username,
    {
      $set: {
        alertsUID: alertsUID,
      },
    },
    (err: any, user: any) => {
      if (err) {
        console.log('ERROR SETTING ALERTS UID');
        return res.status(404).json({ message: 'Unable to update user.' });
      }
      console.log('alerts UID added to database.');
      next();
    }
  );
};
export default createAlertsUID;
