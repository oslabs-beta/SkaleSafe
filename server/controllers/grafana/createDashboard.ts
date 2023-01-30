import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username+":"+password, "utf8");
let basicAuth = authBuffer.toString("base64");

const customDashboard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const response = await axios.post(
            `${grafanaUrl}/api/dashboards/db`,
            {
                'dashboard': {
                    'id': null,
                    'uid': null,
                    'title': 'testDash',
                    'tags': [ 'templated' ],
                    'timezone': 'browser',
                    // 'rows': [ {} ],
                    'schemaVersion': 7,
                    'version': 0
                },
                'overwrite': false
            },
            {
                headers: {
                    'Authorization': `Basic ${basicAuth}`,
                    'Content-Type': 'application/json'
                }
            }
        );
      const dashboardData: any = response.data;
      res.send(dashboardData);
      res.locals.queryData = dashboardData;
      console.log(dashboardData);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
    next();
  };
  
  export default customDashboard;




