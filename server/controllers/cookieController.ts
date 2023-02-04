import { NextFunction, Request, Response } from 'express';

import { ResponseObj } from '../interfaces/response';

interface cookieController {
  addCookie: ResponseObj;
  setSessionCookie: ResponseObj;
}

const errorHandler = (errInfo: any) => {
  const { method, type, err } = errInfo;

  return {
    log: `userController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occcured in userController.${method}. Check the server logs for more details.`,
    },
  };
};

const cookieController: cookieController = {
  addCookie: (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.user) {
      let randNum = Math.random().toString();
      randNum = randNum.substring(2, randNum.length);
      res.cookie('cookie', randNum, {
        maxAge: 18600,
        httpOnly: true,
        secure: true,
      });
      return next();
    }
  },

  setSessionCookie: (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.user) {
      res.cookie('session', res.locals.user._id, {
        httpOnly: true,
        secure: true,
      });
      return next();
    }
  },
};

export default cookieController;
