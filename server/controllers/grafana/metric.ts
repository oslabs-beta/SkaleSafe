import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { link } from 'fs';
import { isConstructorDeclaration } from 'typescript';
import { server } from '../../../client/src/data/server';

const grafanaUrl = server;
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username + ':' + password, 'utf8');
let basicAuth = authBuffer.toString('base64');

const grafSearch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await axios.get(`${grafanaUrl}/api/search?id=10`, {
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
      },
    });
    const queryData: any = response.data;
    console.log(queryData);

    const link = '/graf/d-solo'.concat(queryData[0]['url'].slice(7));

    // res.locals.link = (`${grafanaUrl}${queryData[0]["url"]}?orgId=1`);
    res.locals.link = `${grafanaUrl}${link}?orgId=1`;
    // res.locals.queryData = queryData;

    console.log(queryData[0]['url']);
    console.log(res.locals.link);

    //store uids in db?

    //for mvp just go into one uid and provide the db for it
    // const dashboard = await axios.get(
    //   // `${grafanaUrl}${queryData[0]["url"]}`,
    //   `http://localhost:8888${queryData[0]["uid"]}`,
    //   // `${grafanaUrl}/d/85a562078cdf77779eaa1add43ccec1e/kubernetes-compute-resources-namespace-pods`,
    //   );
    // const dashboardData: any = response.data;
    // console.log(dashboardData);
    // res.send(dashboardData);
    // res.locals.dashboardData = dashboardData;
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
  next();
};

export default grafSearch;
