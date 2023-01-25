import express, { Request, Response } from 'express';
import axiosDashboard from '../../controllers/grafana/axiosDashboard';
import grafSearch from '../../controllers/grafana/metric';
import createAPITokens from '../../controllers/grafana/createAPIToken';

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

//after the pod restarts, restart the port forwarding for the new grafana pod


router.get('/', axiosDashboard, (req: Request, res: Response) => {
    console.log('successfully ran grafana middleware');  
    res.send(res.locals.queryData);
});

router.get('/test', grafSearch, (req: Request, res: Response) =>
  console.log('successfully ran graf search middleware')
);

// router.get('/api', createAPITokens, (req: Request, res: Response) =>
//   console.log('successfully created token middleware')
// );

export default router;

