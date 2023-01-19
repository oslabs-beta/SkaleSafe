import express, { Request, Response } from "express";
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send('This is the user route')
})

export default router;
