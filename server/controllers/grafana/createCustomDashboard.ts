import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { Buffer } from "buffer";
import customPanelData from "./customDashboardData/customPanelData";
import customTemplateData from "./customDashboardData/customTemplateData";

// Dynamically grab this data from post request
const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username+":"+password, "utf8");
let basicAuth = authBuffer.toString("base64");

const createCustomDashboard = async (
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
          title: 'Custom Dashboard',
          tags: [ 'templated' ],
          timezone: 'browser',
          schemaVersion: 7,
          version: 0,
          panels: customPanelData,
          templating: customTemplateData,
        },
        overwrite: true,
      },
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const customData: any = response.data;
    res.locals.queryData = customData;
    res.locals.uid = customData.uid;
    return next();
  } catch (err) {
    console.log('error in createCustomDashboard');
    return next (err);
  }
};
  
export default createCustomDashboard;