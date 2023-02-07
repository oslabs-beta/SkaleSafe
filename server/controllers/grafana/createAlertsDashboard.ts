import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { Buffer } from 'buffer';
import alertsPanelData from './alertsDashboardData/alertsPanelData';
import alertsTemplateData from './alertsDashboardData/alertsTemplateData';

const createAlertsDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const grafanaUrl = req.body.addCluster.grafanaPort;
    const username = req.body.addCluster.grafanaUsername;
    const password = req.body.addCluster.grafanaPassword;
    console.log(grafanaUrl, username, password);

    let authBuffer = Buffer.from(username + ':' + password, 'utf8');
    let basicAuth = authBuffer.toString('base64');

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
