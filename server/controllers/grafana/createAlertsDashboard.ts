import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { Buffer } from 'buffer';
import alertsPanelData from './alertsDashboardData/alertsPanelData';
import alertsTemplateData from './alertsDashboardData/alertsTemplateData';

// Dynamically grab this data from post request
const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username + ':' + password, 'utf8');
let basicAuth = authBuffer.toString('base64');

const createAlertsDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.post(
      `${grafanaUrl}/api/dashboards/db`,
      {
        dashboard: {
          id: null,
          uid: null,
          title: 'Alerts Dashboard',
          tags: ['templated'],
          timezone: 'browser',
          schemaVersion: 7,
          version: 0,
          panels: alertsPanelData,
          templating: alertsTemplateData,
        },
        overwrite: true,
      },
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const alertsData: any = response.data;
    res.locals.queryData = alertsData;
    res.locals.uid = alertsData.uid;
    return next();
  } catch (err) {
    console.log('error in creatAlertsDashboard');
    return next(err);
  }
};

export default createAlertsDashboard;
