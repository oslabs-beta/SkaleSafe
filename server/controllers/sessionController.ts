import { NextFunction, Request, Response } from 'express';

import { ResponseObj } from '../interfaces/response';

const Session = require('../models/sessionModel');


interface sessionController {
    isLoggedIn: ResponseObj;
    startSession: ResponseObj;
}


const sessionController: sessionController = {
    isLoggedIn: (req: Request, res: Response, next: NextFunction) => {

    },
    startSession: (req: Request, res: Response, next: NextFunction) => {}
};

export default sessionController;
