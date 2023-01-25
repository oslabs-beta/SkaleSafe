import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username+":"+password, "utf8");
let basicAuth = authBuffer.toString("base64");

const grafSearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      `${grafanaUrl}/api/search`,
      {
        headers: {
            'Authorization': `Basic ${basicAuth}`,
            'Content-Type': 'application/json',
        }
    });
    const queryData: any = response.data;
    console.log(queryData);
    res.send(queryData);
    res.locals.queryData = queryData;

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
  next();
};

export default grafSearch;

