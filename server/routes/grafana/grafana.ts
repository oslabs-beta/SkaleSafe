import express, { Request, Response } from 'express';
import axiosDashboard from '../../controllers/grafana/axiosDashboard';
import grafSearch from '../../controllers/grafana/metric';
import customDashboard from '../../controllers/grafana/customDashboard';
import { createGrafAlert } from '../../controllers/grafana/createGrafAlert';
import { getAlerts } from '../../controllers/grafana/getAlerts';

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

router.get('/', axiosDashboard, (req: Request, res: Response) => {
  console.log('successfully ran grafana middleware');
  res.send(res.locals.queryData);
});

router.get('/test', grafSearch, (req: Request, res: Response) => {
  console.log('successfully ran graf search middleware');
  res.send(res.locals.link);
});

router.get('/add', customDashboard, (req: Request, res: Response) => {
  console.log('dashboard created');
  res.status(200).send(res.locals.dashboardData);
});

router.post('/alerts', createGrafAlert, (req, res) => {
  console.log('passed middleware');
});

// Get all currently configured alerts.
router.get('/alerts', getAlerts, (req: Request, res: Response) => {
  console.log('passed getAlerts middleware');
});

export default router;
