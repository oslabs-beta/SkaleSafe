import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

// Alerting notification channels:"
// https://grafana.com/docs/grafana/latest/developers/http_api/alerting_notification_channels/

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username + ':' + password, 'utf8');
let basicAuth = authBuffer.toString('base64');

// SANG: insert custom dashboard ID here.
const dashboardID = '?';
// set dashboard ID as static... and get alertID from the frontend

// create the query.
const grafanaAPI = axios.create({
  baseURL: `${grafanaUrl}`,
  headers: {
    Authorization: `Basic ${basicAuth}`,
    'Content-Type': 'application/json',
  },
});

export const createGrafAlert = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dashboardID = req.params.dashboardID;
    const alertID = req.params.alertID;
    const enableAlert = {
      state: 'enabled',
    };
    // send the grafanaApi query
    const response = await grafanaAPI.post(
      `/api/dashboards/${dashboardID}/alert/${alertID}/state`,
      enableAlert
    );

    if (response.status === 200) {
      res.send({ message: 'Alerts enabled successfully!' });
    } else {
      res.status(response.status).send({ message: response.data.message });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error enabling alert' });
  }
};
