import express from 'express';
const router = express.Router();

router.get('/', (req, res) => res.send('hello from Prom router'));

export default router;
