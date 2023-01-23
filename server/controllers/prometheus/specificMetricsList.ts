import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

const specificMetricsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const metrics = ['metric-1', 'metric-2', 'metric-3', 'metric-4'];
    let metricsData: any = {};
    for (let metric of metrics) {
      const query = `{__name__=~"${metric}", job="prom-job"}`;
      const { data } = await axios.get(
        `http://localhost:9090/api/v1/query?query=${query}`
      );
      metricsData[metric] = data.data.result;
    }
    res.json(metricsData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching metrics');
  }
  next();
};

export default specificMetricsList;
