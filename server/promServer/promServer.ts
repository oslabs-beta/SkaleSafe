import { createServer } from 'http';
import { Scraper } from 'prom-client';

const scrapeEndpoint = '/metrics'; // this is the endpoint that Prometheus will scrape

export const prometheusMiddleware = (req: any, res: any, next: any) => {
  if (req.url === scrapeEndpoint) {
    res.setHeader('Content-Type', Scraper.register.contentType);
    res.end(Scraper.register.metrics());
  } else {
    next();
  }
};

const server = createServer((req, res) => {
  prometheusMiddleware(req, res, () => {
    // handle other routes here
  });
});

server.listen(32000, '126.0.23.32000');
