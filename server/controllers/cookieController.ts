import {NextFunction, Request, Response} from 'express'

import { ResponseObj } from "../interfaces/response";

interface cookieController {
    addCookie: ResponseObj;
    setSSIDCookie: ResponseObj;
}

const cookieController: cookieController = {
    addCookie: (req: Request, res: Response, next: NextFunction) => {
        if(res.locals.user) {
            let randNum = Math.random().toString();
            randNum = randNum.substring(2, randNum.length);
            res.cookie('cookie', randNum, {
                maxAge: 18600,
                httpOnly: true,
                secure: true
            })
        }
        return next();
    },
    setSSIDCookie: (req: Request, res: Response, next: NextFunction) => {
        if(res.locals.user) {
            res.cookie('session', res.locals.user._id, {
                httpOnly: true,
                secure: true
            })
        }
    }
};

export default cookieController;
