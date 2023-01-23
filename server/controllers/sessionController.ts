import { NextFunction, Request, Response } from 'express';

import { ErrorRequestHandler } from 'express';
import { ResponseObj } from '../interfaces/response';
import { UserObj } from './../interfaces/user';

const Session = require('../models/sessionModel');


interface sessionController {
    isLoggedIn: ResponseObj;
    startSession: ResponseObj;
}

const errorHandler = (errInfo: any)  => {
    const {method, type, err } = errInfo;

    return {
        log: `userController.${method} ${type}: ERROR: ${
            typeof err === 'object' ? JSON.stringify(err) : err
        }`,
        message: {
            err: `Error occcured in userController.${method}. Check the server logs for more details.`
        }
    }    
}

const sessionController: sessionController = {
    isLoggedIn: (req: Request, res: Response, next: NextFunction) => {
        console.log('this is req cookies', req.cookies);

        Session.findOne({cookieId: req.cookies})
            .then((data: any) => {
                console.log(data)
                if(!data) {
                    console.log('This means there was no data')
                    res.redirect('/signup');
                } else {
                    return next();
                }
            })
            .catch((err: ErrorRequestHandler) => {
                console.log('this one means we hit the catch')
                res.redirect('/signup');
                return next({
                  method: 'isLoggedIn',
                  message: 'Error logging in with that account',
                  err
                })
            })
    },
    startSession: (req: Request, res: Response, next: NextFunction) => {
        const { _id } = res.locals.user;
        console.log(_id)

        Session.create({ cookieId: _id })
            .then((session: object) => {
                res.locals.newSession = session;
                return next();
            })
            .catch((err: ErrorRequestHandler) => {
                return next({
                    method: 'startSession',
                    type: 'Error querying to the database',
                    err
                })
            })
    }
};

export default sessionController;
