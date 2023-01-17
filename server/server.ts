import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is a test!');
});
app.get('/database', (req, res) => {
  // test db route
  res.send('You have reached the database route');
});

app.get('/api', (req, res) => {
  // test api route
  res.send('You have reached the API route');
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}/`);
});
// to start -> "npm run server" ... make sure youre in server folder.
