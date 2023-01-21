import { createServer } from 'http';
import { Scraper } from 'prom-client';

const scrapeEndpoint = '/metrics'; // this is the endpoint that Prometheus will scrape

export const fromNewServer = (req: any, res: any, next: any) => {
  if (req.url === scrapeEndpoint) {
    res.setHeader('Content-Type', Scraper.register.contentType);
    res.end(Scraper.register.metrics());
  } else {
    next();
  }
};

const server = createServer((req, res) => {
  fromNewServer(req, res, () => {
    // handle other routes here
  });
});

server.listen(9090, 'prom server on http://localhost:9090');

// potentially helpful article:
// https://github.com/siimon/prom-client
