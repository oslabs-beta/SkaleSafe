import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username+":"+password, "utf8");
let basicAuth = authBuffer.toString("base64");

export const getAlerts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      `${grafanaUrl}/api/v1/provisioning/alert-rules/l0fK3G0Vz`,
      {
        headers: {
            'Authorization': `Basic ${basicAuth}`,
            'Content-Type': 'application/json',
        }
      });
    console.log(response.data);
    res.locals.data = response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
  next();
};

// we can map over this response data in the frontend alerts page, showing a toggle button for each alert already enabled.
// user can flick the alert off, and that sends a "delete" request, along with alert UID to grafana to delete that alert
