import * as axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'sang';
const password = 'intern';

export const axiosDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.default.get(
      `${grafanaUrl}/api/dashboards/uid/your_dashboard_id`,
      {
        auth: {
          username: username,
          password: password,
        },
      }
    );
    const dashboardData: any = response.data;
    console.log(dashboardData);
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
