import express, { Request, Response } from 'express';

import axiosDashboard from '../../controllers/grafana/axiosDashboard';
import createCustomDashboard from '../../controllers/grafana/createCustomDashboard';
import { createCustomUID } from '../../controllers/database/createCustomUID';
import createAlertsDashboard from '../../controllers/grafana/createAlertsDashboard';
import { createAlertsUID } from './../../controllers/database/createAlertsUID';
import { createGrafAlert } from '../../controllers/grafana/createGrafAlert';
import { getAlerts } from '../../controllers/grafana/getAlerts';
import getCredentials from '../../controllers/database/getCredentials';
import grafSearch from '../../controllers/grafana/metric';

const router = express.Router();

//create yaml file if you do not have it.
// kubectl -n monitoring get deployments [name of grafana deployment] -o yaml > grafana.yaml

//edit the yaml file
// nano grafana.yaml

// add to env:
// - name: GF_SECURITY_ALLOW_EMBEDDING
// value: "true"
// - name: GF_AUTH_ANONYMOUS_ENABLED
// value: "true"

// serve_from_sub_path to true.

//after the pod restarts, restart the port forwarding for the new grafana pod
// router.use('/', () => {
//   console.log('grafana route reached');
// });

// to add a custom dashboard
router.post('/add-dashboard',
  createCustomDashboard,
  createCustomUID,
  (req: Request, res: Response) => {
    console.log('dashboard created');
    res.status(200).send(res.locals.queryData);
  }
);

// ALERTS
// Post    1) create grafana dashboard, 2) send alerts dashboard UID to database
router.post('/add-alerts',
  createAlertsDashboard,
  createAlertsUID,
  (req: Request, res: Response) => {
    console.log('alerts dashboard created');
    res.status(200).send(res.locals.queryData);
  }
);
// Get    1) fetch grafana credentials from db, 2) create grafana dashboard, 3) send alerts dashboard UID to database
router.get('/alerts', 
  getCredentials, 
  (req: Request, res: Response) => {
  console.log('get alerts middleware passed');
  const { userData } = res.locals;
  res.status(200).send(userData);
  }
);

router.get('/clustermetrics',
  getCredentials,
  (req: Request, res: Response) => {
  console.log('get cluster metrics middleware passed');
  const { userData } = res.locals;
  res.status(200).send(userData);
  }
);

router.get('/scalingmetrics', 
  getCredentials, 
  (req: Request, res: Response) => {
  console.log('get scaling metrics middleware passed');
  const { userData } = res.locals;
  res.status(200).send(userData);
  }
);

// // Get all currently configured alerts.
// router.get('/alerts', getAlerts, (req: Request, res: Response) => {
//   console.log('passed getAlerts middleware');
//   res.status(200);
// });
export default router;
