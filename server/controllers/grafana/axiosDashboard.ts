import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

const axiosDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      `${grafanaUrl}/api/dashboards/db`,
    //   {
    //     'dashboard': {
    //         'id': null,
    //         'title': 'Production Overview',
    //         'tags': [
    //             'templated'
    //         ],
    //         'timezone': 'browser',
    //         'rows': [
    //             {}
    //         ],
    //         'schemaVersion': 6,
    //         'version': 0
    //     },
    //     'overwrite': false
    // },
      {
          headers: {
              'Authorization': 'Bearer eyJrIjoiSWJuYnR6OGg0dDBDTTNZQnB2WE5CdVlJeml3eGxsanAiLCJuIjoiYXBpa2V5IiwiaWQiOjF9',
              'Content-Type': 'application/json',
          }
      });
    const dashboardData: any = response.data;
    res.send(dashboardData);
    res.locals.queryData = dashboardData;
    // console.log(dashboardData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
  next();
};

export default axiosDashboard;