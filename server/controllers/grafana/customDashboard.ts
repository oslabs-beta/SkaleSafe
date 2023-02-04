  import axios from 'axios';
  import { Request, Response, NextFunction } from 'express';
  import { Buffer } from "buffer";
  import panelData from "./customDashboardData/panelData";
  import templateData from "./customDashboardData/templateData";

  
  const grafanaUrl = 'http://localhost:8888';
  const username = 'admin';
  const password = 'prom-operator';
  
  let authBuffer = Buffer.from(username+":"+password, "utf8");
  let basicAuth = authBuffer.toString("base64");

  let dbID = '';

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
                      'title': 'Dan Safe',
                      'tags': [ 'templated' ],
                      'timezone': 'browser',
                      'schemaVersion': 7,
                      'version': 0,
                      "panels": panelData,
                      "templating": templateData,
                      },
                  'overwrite': true,
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
        console.log(dashboardData.uid);
        dbID = dashboardData.uid;

        //console log returns 
        // {
        //    id: 36,
        //    slug: 'skale-safe',
        //    status: 'success',
        //    uid: 'AzEooT04z',
        //    url: '/graf/d/AzEooT04z/skale-safe',
        //    version: 3
        // }

      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
      next();
    };
    
    export { customDashboard, dbID };