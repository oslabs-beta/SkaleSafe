import express, { Request, Response } from 'express';
import getDefaultMetrics from '../../controllers/prometheus/getDefaultMetrics';
const router = express.Router();

router.get('/', getDefaultMetrics, (req: Request, res: Response) =>
  console.log('successfully ran prometheus middleware')
);

export default router;
