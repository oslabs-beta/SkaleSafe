import express, { Request, Response } from 'express';
import { axiosDashboard } from '../../controllers/grafana/axiosDashboard';
import grafSearch from '../../controllers/grafana/metric';

const router = express.Router();

router.get('/', axiosDashboard, (req: Request, res: Response) =>
  console.log('successfully ran grafana middleware')
);

router.get('/test', grafSearch, (req: Request, res: Response) =>
  console.log('successfully ran graf search middleware')
);

export default router;
