import 'dotenv/config';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import multer from 'multer';
import path from 'path';
import process from 'process';
// import userRouter from './routes/userRouter';

const PORT = process.env.PORT || 3002;

// allows backend to get file:
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/users', );



app.get('/', (req, res) => {
  res.send('This is a test!');
});

// ROUTES---
// Prom Route...
import promRouter from './routes/prom/prom';
app.use('/prom', promRouter);
// Add Cluster Route...
import addClusterRouter from './routes/addCluster/addCluster';
app.use('/add-cluster', addClusterRouter);

app.get('/database', (req, res) => {
  // test db route
  res.send('You have reached the database route');
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}/`);
});
// to start individually -> "npm run server" ... make sure youre in server folder.
