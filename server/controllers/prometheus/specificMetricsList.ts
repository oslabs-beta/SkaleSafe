import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

// LIST
const specificMetricsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const metrics = [
      'kube_namespace_labels',
      'kube_pod_labels',
      'kubelet_running_pods',
      'machine_cpu_cores',
    ];
    let metricsData: any = {};
    for (let metric of metrics) {
      const query = `{__name__=~"${metric}", job="prom-job"}`;
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/query?query=${query}`
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

// SINGLE METRIC
const specificMetric = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const metric = 'kube_pod_labels';
    const query = `{__name__=~"${metric}", job="prom-job"}`;
    const { data } = await axios.get(
      `http://localhost:8080/api/v1/query?query=${query}`
    );
    const metricsData = { [metric]: data.data.result };
    res.json(metricsData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching metrics');
  }
  next();
};

export { specificMetricsList, specificMetric };
