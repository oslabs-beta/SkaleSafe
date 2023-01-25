import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';

import cookieController from '../../controllers/cookieController';
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
  // cookieController.addCookie,
  // sessionController.startSession,
  // cookieController.setSSIDCookie,
  (req: Request, res: Response) => {
    res.status(200).send('Signup a success');
  }
);

router.post(
  '/signin',
  userController.verifyUser,
  async (req: Request, res: Response) => {
    const username = res.locals.user.username;
    console.log('from res.locals.user:', username);
    // Add cookie of the username
    res.cookie('token', 'testing');
    res.status(200).json({
      message: 'Successful Login!',
    });
  }
);

router.post('/logout', (req, res) => {
  // Destroy the user's cookie
  res.clearCookie('userId');
  res.json({ message: 'Successfully logged out' });
});

export default router;
