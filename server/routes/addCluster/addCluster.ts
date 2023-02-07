import express, { Request, Response } from 'express';
import { addClusterToDB } from '../../controllers/database/addCluster';
const router = express.Router();

router.get('/', (req: Request, res: Response) =>
  res.send('hello from Cluster router')
);

// Add Cluster POST from Axios:
router.post('/', addClusterToDB, (req, res) => {
  console.log('from route: ', req.body);
});

// add cluster...
// req.body:  {
//   grafanaPort: '3000',
//   grafanaUsername: 'sangs-username',
//   grafanaPassword: 'intern',
//   kubeviewPort: '8080',
//   username: 'johnwick'
//   }

export default router;
