import 'dotenv/config';

import express, { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from 'express';


// Add Cluster Route...
import addClusterRouter from './routes/addCluster/addCluster';
import bodyParser from 'body-parser';
import connectDB from './models/db';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import process from 'process';
// ROUTES---
import promRouter from './routes/prometheus/prometheus';
import userRouter from './routes/user/userRouter';
import grafRouter from './routes/grafana/grafana';

const PORT = process.env.PORT || 3002;

// allows backend to get file:
const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:8888',
//   optionsSuccessStatus: 200
// }));


// app.use((req, res, next) => {
//   res.setHeader("X-Frame-Options", "allow-from http://localhost:8888");
//   console.log("X-Frame-Options");
//   next();
// });

app.use(express.urlencoded({extended: true})as RequestHandler)


app.use('/users', userRouter);
app.use('/prom', promRouter);
app.use('/add-cluster', addClusterRouter);
app.use('/client', express.static(path.resolve(__dirname, '../client')));

app.use('/graf', grafRouter);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// app.get('/database', (req: Request, res: Response) => {
//   // test db route
//   res.send('You have reached the database route');
// });

app.use(
  '*',
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(404).send('Not Found');
  }
);

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const defaultError = {
      log: 'Express error handler caught unkown middleware error',
      status: 500,
      message: { err: 'An error occured' },
    };

    const errorObj = Object.assign({}, defaultError, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}/`);
});
// to start individually -> "npm run server" ... make sure youre in server folder.
