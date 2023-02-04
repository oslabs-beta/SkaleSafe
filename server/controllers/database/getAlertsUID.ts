import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { UserObj } from '../../interfaces/user';

const getAlertsUID = (req: Request, res: Response, next: NextFunction) => {
  const username = localStorage.getItem('username');

  const User = mongoose.model<mongoose.Document>('User');
  User.findOne({ username })
    .then((data: any) => {
      res.locals.alertsUID = data.alertsUID;
      res.locals.clusterIP = data.grafURL;
      res.locals.port = data.grafPort;
      next();
    })
    .catch((e) => next(e));
};

export default getAlertsUID;
