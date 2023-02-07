import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';

let authBuffer = Buffer.from(username+":"+password, "utf8");
let basicAuth = authBuffer.toString("base64");

export const newAlert = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.post(
      `${grafanaUrl}/api/v1/provisioning/alert-rules`,
      {
        "Annotations": {
            "runbook_url": "http://sangreahan.com"
        },
        "Condition": "1 == 1",
        "Data": [
            {
                "datasourceUid": "prometheus",
                "model": {
                    "conditions": [
                        {
                            "evaluator": {
                                "params": [0, 0],
                                "type": "gt"
                            },
                            "operator": {
                                "type": "and"
                            },
                            "query": {
                                "params": []
                            },
                            "reducer": {
                                "params": [],
                                "type": "avg"
                            },
                            "type": "query"
                        }
                    ],
                    "datasource": {
                        "type": "prometheus",
                        "uid": "prometheus"
                    },
                    "expression": "1 == 1",
                    "hide": false,
                    "intervalMs": 1000,
                    "maxDataPoints": 43200,
                    "refId": "A",
                    "type": "math"
                },
                "queryType": "",
                "refId": "A",
                "relativeTimeRange": {
                    "from": 0,
                    "to": 0
                }
            }
        ],
        "ExecErrState": "OK",
        "FolderUID": "project_x",
        "NoDataState": "OK",
        "OrgID": 1,
        "RuleGroup": "CPU",
        "Title": "Always firing",
        "UID": "dantheman",
        "for": "5m"
    },
      {
        headers: {
            'Authorization': `Basic ${basicAuth}`,
            'Content-Type': 'application/json',
        }
      });
    console.log(response.data);
    res.locals.data = response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
  next();
};

// we can map over this response data in the frontend alerts page, showing a toggle button for each alert already enabled.
// user can flick the alert off, and that sends a "delete" request, along with alert UID to grafana to delete that alert
