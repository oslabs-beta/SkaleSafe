import { Request, Response, NextFunction } from 'express';
import { UserObj } from '../../interfaces/user';
const User = require('../../models/userModel');

//could use it for all three UID requests instead of just alerts

const getCredentials = async (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
  try {
    
    const { username } = req.query;
  
    const userData: UserObj = await User.findOne({ username });

    const data = {
      alertsUID: userData.alertsUID,
      customUID: userData.customUID,
      grafPort: userData.grafPort,
    }

    // console.log('in getAlertsUID middleware');
    // console.log('data.alertsUID: ', userData.alertsUID);
    // console.log('data.customUID: ', userData.customUID);
    // console.log('data.grafPort: ', userData.grafPort);

    res.locals.userData = data;
    next();
  } catch (err) {
    return next(err);
  }
};

export default getCredentials;
