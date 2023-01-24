import express, { Request, Response } from 'express';
import axiosDashboard from '../../controllers/grafana/axiosDashboard';
import grafSearch from '../../controllers/grafana/metric';
import createAPITokens from '../../controllers/grafana/createAPIToken';

const router = express.Router();

router.get('/', axiosDashboard, (req: Request, res: Response) =>
  console.log('successfully ran grafana middleware')
);

router.get('/test', grafSearch, (req: Request, res: Response) =>
  console.log('successfully ran graf search middleware')
);

router.get('/api', createAPITokens, (req: Request, res: Response) =>
  console.log('successfully created token middleware')
);

export default router;
