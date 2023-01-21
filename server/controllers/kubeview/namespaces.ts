import * as http from 'http';
import { Request, Response, NextFunction } from 'express';

// reference:
// https://kubeview.benco.io/cmd/server/

// /api/namespaces    --> Return a list of namespaces
// /api/scrape/{ns}	  --> Main data gathering call, returns objects in given namespace
// /api/config	      --> Called by front end to get NAMESPACE_SCOPE setting

export const namespaces = (req: Request, res: Response, next: NextFunction) => {
  const options = {
    host: 'localhost',
    port: 8080,
    path: '/api/scrape',
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
