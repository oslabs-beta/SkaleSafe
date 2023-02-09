import express, { Request, Response } from 'express';

import cookieController from '../../controllers/cookieController';
import cookieParser from 'cookie-parser';
import sessionController from '../../controllers/sessionController';
import userController from '../../controllers/userController';

const router = express.Router();
router.use(cookieParser());

router.get('/signin', (req: Request, res: Response) => {
  res.status(200).send('This is the user route');
});

router.get('/signup', (req: Request, res: Response) => {
  res.status(200).send('This is the user route');
});

router.post(
  '/signup',
  userController.createUser,
  (req: Request, res: Response) => {
    res.status(200).send('Signup a success');
  }
);

router.post(
  '/signin',
  userController.verifyUser,
  (req: Request, res: Response) => {
    const {name, passMatch} = res.locals
    if (name === null || !passMatch) {
      // 204 was necessary because sending back a status code in the 400s 
      // triggers some kinda automatic axios mumbo-jumbo...
      return res.status(204).json({
        message: 'Unsuccessful Login.'
      });
    }

    res.cookie('token', 'testing');
    res.status(200).json({
      message: 'Successful Login!',
      user: res.locals.user
    });
  }
);

router.post('/logout', (req, res) => {
  // Destroy the user's cookie
  res.clearCookie('userId');
  res.json({ message: 'Successfully logged out' });
});

export default router;
