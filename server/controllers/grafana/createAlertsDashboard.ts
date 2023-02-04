import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { Buffer } from 'buffer';
import alertPanelData from './alertsDashboardData/panelData';
import alertTemplateData from './alertsDashboardData/templateData';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

// plugin the dashboard ID here...
//need to save this to the DB once the table is created.

let authBuffer = Buffer.from(username + ':' + password, 'utf8');
let basicAuth = authBuffer.toString('base64');

// console.log(basicAuth);

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
          title: 'Alerts',
          tags: ['templated'],
          timezone: 'browser',
          schemaVersion: 7,
          version: 0,
          panels: alertPanelData,
          templating: alertTemplateData,
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
    res.send(alertsData);
    res.locals.queryData = alertsData;
    res.locals.uid = alertsData.uid;
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
  next();
};

export { createAlertsDashboard, UID };
