import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const getDefaultMetrics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await axios.get(
      'http://localhost:8080/api/v1/query?query=up'
    );
    const metrics = data.data.result;
    console.log(metrics);
    res.send(metrics);
    res.locals.metrics = metrics;
  } catch (e) {
    console.error(e);
    res.status(500).send('Error fetching metrics');
  }
  next();
};

export default getDefaultMetrics;
