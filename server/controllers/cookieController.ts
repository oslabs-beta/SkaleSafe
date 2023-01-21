import {NextFunction, Request, Response} from 'express'

import { ResponseObj } from "../interfaces/response";

interface cookieController {
    addCookie: ResponseObj;
    setSSIDCookie: ResponseObj;
}

const cookieController: cookieController = {
    addCookie: () => {},
    setSSIDCookie: () => {}
};

export default cookieController;
