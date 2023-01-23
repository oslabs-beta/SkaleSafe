import { NextFunction, Request, Response } from "express";

export type ResponseObj = (
 req: Request,
 res: Response,
 next: NextFunction,
) => void;
