import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import process from 'process';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from 'multer';
dotenv.config();
const PORT = process.env.PORT || 3002;

// allows backend to get file:
const upload = multer({ dest: 'uploads/' });

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

// UPLOAD:
// retrieve files uploaded by user:
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    // access the file as req.file
    console.log(req.file);
    res.send({ message: 'File uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Add Cluster POST from Axios:
app.post('/add-cluster', (req, res) => {
  console.log('from /add-cluster');
  console.log('req.body: ', req.body);
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}/`);
});
// to start -> "npm run server" ... make sure youre in server folder.
