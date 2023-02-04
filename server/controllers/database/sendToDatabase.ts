import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export const sendToDatabase = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log('res.locals.queryData: ', res.locals.queryData);
        next();
    } catch (error) {
     console.log('error in sendToDatabase');
     next(error);   
    }
};