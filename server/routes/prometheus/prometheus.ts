import express, { Request, Response } from 'express';
import getDefaultMetrics from '../../controllers/prometheus/getDefaultMetrics';
import {
  specificMetricsList,
  specificMetric,
} from '../../controllers/prometheus/specificMetricsList';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());

router.get('/', getDefaultMetrics, (req: Request, res: Response) =>
  console.log('successfully ran prometheus middleware')
);

router.get('/spec', specificMetricsList, (req: Request, res: Response) =>
  console.log('successfully ran specific metrics')
);

export default router;
