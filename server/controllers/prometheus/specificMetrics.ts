import express from 'express';
import { Client } from 'prom-client';

const prom = express();

const promClient = new Client();

prom.use(async (req, res, next) => {
  try {
    const metrics = ['metric-1', 'metric-2', 'metric-3', 'metric-4'];
    let metricsData: any = {};
    for (let metric of metrics) {
      const query = `{__name__=~"${metric}", job="prom-job"}`;
      const results = await promClient.query({ query });
      metricsData[metric] = results.data.result;
    }
    res.json(metricsData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching metrics');
  }
  next();
});

prom.listen(5000);
