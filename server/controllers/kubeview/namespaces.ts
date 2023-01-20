import * as http from 'http';
import { Request, Response, NextFunction } from 'express';

export const namespaces = (req: Request, res: Response, next: NextFunction) => {
  const options = {
    host: 'localhost',
    port: 8080,
    path: '/scrape',
  };

  http
    .get(options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        res.send(data);
      });
    })
    .on('error', (error) => {
      console.log(`Error: ${error.message}`);
      res.send(error.message);
    });
  next();
};
