import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

// import { Error } from "mongoose";
import { ResponseObj } from './../interfaces/response';
import { UserObj } from '../interfaces/user';
import bcrypt from 'bcryptjs';

const User = require('../models/userModel');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

interface userController {
  createUser: ResponseObj;
  // getUser: ResponseObj,
  verifyUser: ResponseObj;
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

const userController: userController = {
  createUser: (req: Request, res: Response, next: NextFunction) => {
    const { firstname, lastname, email, username, password } = req.body;
    User.create({ firstname, lastname, email, username, password })
      .then((user: UserObj) => {
        console.log(user);
        res.locals.user = user;
        return next();
      })
      .catch((err: ErrorRequestHandler) => {
        return next(
          errorHandler({
            method: 'createUser',
            type: 'Failed to create a new user in the database',
            err,
          })
        );
      });
  },
  // getUser: (req: Request, res: Response, next: NextFunction) => {},
  verifyUser: (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and/or Password incorrect' });
    }

    User.findOne({ username })
      .then((user: UserObj) => {
        console.log(user);

        if (!user) {
          return res.status(401).json({
            error: 'Invalid credentials. User does not exist',
          });
        }

        // add cookie (userId)
        res.cookie('userId', user._id, { maxAge: 900000, httpOnly: true });
        console.log('added cookie:', user._id);

        const plainPassword = password;
        const hashPassword = user.password;

        bcrypt
          .compare(plainPassword, hashPassword)
          .then((result: boolean) => {
            if (result) {
              res.locals.user = user;
              return next();
            }
          })
          .catch((err: ErrorRequestHandler) => {
            return next({
              method: 'VerifyUser.findOne',
              type: 'Error occured while comparing password hash',
              err,
            });
          });
      })
      .catch((err: ErrorRequestHandler) => {
        return next(
          errorHandler({
            method: 'verifyUser',
            type: 'Failed to find user within the database',
            err,
          })
        );
      });
  },
};

export default userController;

//  (err: Error, user: UserObj) => {
//     if(err){
//         console.log("We are in the Error conditional")
//         return next({
//             method: 'createUser',
//             type: 'Failed to create a new user in the database',
//             err
//         });
//     }
//     console.log('We did not hit any errors!');
//     console.log(user);
//     res.locals.user = user;
//     return next();
// }

// , (err: ErrorRequestHandler, result: string) => {
//     if(err) {
//         return next(
//             errorHandler({
//                 method: 'findOne',
//                 type: 'Error occured while comparing password hash',
//                 err
//             })
//         )
//     } else {
//         res.locals.user = user
//         return next();
//     }
// }
