import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { isConstructorDeclaration } from 'typescript';

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
    res.locals.queryData = `http://localhost:8888${queryData[0]["url"]}`;

    console.log(queryData[0]["url"]);

    //store uids in db?

    //for mvp just go into one uid and provide the db for it
    // const dashboard = await axios.get(
    //   // `${grafanaUrl}${queryData[0]["url"]}`,
    //   `http://localhost:8888${queryData[0]["url"]}`,
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

