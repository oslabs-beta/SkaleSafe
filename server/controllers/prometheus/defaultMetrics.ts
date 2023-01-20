import Prometheus from 'prom-client';
import { collectDefaultMetrics } from 'prom-client';

const client = new Prometheus.Client({
  baseURL: 'http://126.0.23.32:3200',
});

export const getPromDefaultMetrics = (req, res, next) => {
  if (req.url === '/metrics') {
    collectDefaultMetrics();
    const metrics = Prometheus.register.metrics();
    res.set('Content-Type', Prometheus.register.contentType);
    res.send(metrics);
  } else {
    next();
  }
};
