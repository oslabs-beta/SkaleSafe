import { Request, Response, NextFunction } from 'express';
const User = require('../../models/userModel');

// add cluster...
// req.body:  {
//   grafanaPort: '3000',
//   grafanaUsername: 'sangs-username',
//   grafanaPassword: 'intern',
//   kubeviewPort: '8080',
//   username: 'johnwick'
//   }

export const createAlertsUID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const { ssUsername } = req.body;
    const { uid } = res.locals;
  
    await User.findOneAndUpdate(
      { username: ssUsername },
      { alertsUID: uid });

      return next();
  } catch (err) {
    console.log('error in createAlertsUID: ', err);
    return next(err);
  }
};
