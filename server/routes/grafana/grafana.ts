import express, { Request, Response } from 'express';

import axiosDashboard from '../../controllers/grafana/axiosDashboard';
import createCustomDashboard from '../../controllers/grafana/createCustomDashboard';
import { createCustomUID } from '../../controllers/database/createCustomUID';
import createAlertsDashboard from '../../controllers/grafana/createAlertsDashboard';
import { createAlertsUID } from './../../controllers/database/createAlertsUID';
import { createGrafAlert } from '../../controllers/grafana/createGrafAlert';
import { getAlerts } from '../../controllers/grafana/getAlerts';
import getUIDs from '../../controllers/database/getUIDs';
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

//get default dashboard
router.get('/', axiosDashboard, (req: Request, res: Response) => {
  console.log('successfully ran grafana middleware');
  res.send(res.locals.queryData);
});

// to add a custom dashboard
// sendToDatabase,
router.post(
  '/add-dashboard',
  createCustomDashboard,
  createCustomUID,

  (req: Request, res: Response) => {
    console.log('dashboard created');
    res.status(200).send(res.locals.queryData);
  }
);

// ALERTS
// Post    1) create grafana dashboard, 2) send alerts dashboard UID to database
router.post(
  '/add-alerts',
  createAlertsDashboard,
  createAlertsUID,
  (req: Request, res: Response) => {
    console.log('alerts dashboard created');
    res.status(200).send(res.locals.queryData);
  }
);
// Get    1) get alerts dashboard UID from database
router.get('/alerts', getUIDs, (req: Request, res: Response) => {
  console.log('get alerts middleware passed');

  const { alertsUID, clusterIP, port } = res.locals;

  res.status(200).send({ alertsUID, clusterIP, port });
});
// res.locals.alertsUID = data.alertsUID
// res.locals.clusterIP = data.grafURL
// res.locals.port = data.grafPort

// // Get all currently configured alerts.
// router.get('/alerts', getAlerts, (req: Request, res: Response) => {
//   console.log('passed getAlerts middleware');
//   res.status(200);
// });
export default router;
