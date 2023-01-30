import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

const grafanaUrl = 'http://localhost:8888';

export const getAlerts = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const response = await axios.get(`${grafanaUrl}/api/alert-rules`);
      console.log(response.data)
    res.locals.data = response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}