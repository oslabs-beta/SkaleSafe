import express, { Request, Response } from "express";

import userController from "../../controllers/userController";

const router = express.Router();


router.get('/signin', (req: Request, res: Response) => {
    res.status(200).send('This is the user route');
});

router.get('/signup', (req: Request, res: Response) => {
   res.status(200).send('This is the user route');
})

router.post('/signup', userController.createUser, (req: Request, res: Response) => {
    // res.status(200).send()
});

router.post('/signup', userController.createUser, (req: Request, res: Response) => {
    // res.status(200).send()
});

export default router;
