import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username+":"+password, "utf8");
let basicAuth = authBuffer.toString("base64");

// console.log(basicAuth);


const axiosDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      `${grafanaUrl}/api/dashboards/home`,
      // `${grafanaUrl}/d/85a562078cdf77779eaa1add43ccec1e/kubernetes-compute-resources-namespace-pods`,
      
      {
          headers: {
              'Authorization': `Basic ${basicAuth}`,
              'Content-Type': 'application/json',
          }
      });
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

export default axiosDashboard;