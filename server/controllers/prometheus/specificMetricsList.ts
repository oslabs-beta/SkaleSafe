import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

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
      const query = `{__name__=~"${metric}"}`;
      const { data } = await axios.get(
        `http://localhost:9090/api/v1/query?query=${query}`
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

export default specificMetricsList;
