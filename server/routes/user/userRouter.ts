import express, { Request, Response } from "express";

import cookieController from "../../controllers/cookieController";
import sessionController from "../../controllers/sessionController";
import userController from "../../controllers/userController";

const router = express.Router();


router.get('/signin', (req: Request, res: Response) => {
    res.status(200).send('This is the user route');
});

router.get('/signup', (req: Request, res: Response) => {
   res.status(200).send('This is the user route');
})

router.post('/signup', 
userController.createUser, 
cookieController.addCookie, 
sessionController.startSession,
cookieController.setSessionCookie,
(req: Request, res: Response) => {
    res.status(200).json(res.locals.user);
});

router.post('/signin', 
userController.verifyUser, 
cookieController.addCookie, 
// sessionController.isLoggedIn, 
// cookieController.setSessionCookie, 
(req: Request, res: Response) => {
    res.status(200).json(res.locals.user);
});

export default router;
