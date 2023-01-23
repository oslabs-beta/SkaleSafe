import Grafana from 'prom-client';

const grafana = new Grafana({
  host: '127.0.0.1:32000',
  apiKey: 'service-account-token',
});

export const getGrafanaMetrics = (req, res, next) => {
  const query = req.query.query;
  const from = req.query.from;
  const to = req.query.to;
  grafana
    .search({ query: query, from: from, to: to })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
};
