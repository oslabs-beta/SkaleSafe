import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import {UID} from './createAlertsDashboard';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

// plugin the dashboard ID here...
const alertID = UID;

let authBuffer = Buffer.from(username + ':' + password, 'utf8');
let basicAuth = authBuffer.toString('base64');

// console.log(basicAuth);

const getAlertsDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      `${grafanaUrl}/api/dashboards/uid/${alertID}`,
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const alertsData: any = response.data;
    res.send(alertsData);
    res.locals.queryData = alertsData;
    console.log(alertsData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
  next();
};

export default getAlertsDashboard;
