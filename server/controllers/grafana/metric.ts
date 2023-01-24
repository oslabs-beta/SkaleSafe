import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

const grafSearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      `${grafanaUrl}/api/search`,
      {
        auth: {
          username: username,
          password: password,
        },
      }
    );
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
