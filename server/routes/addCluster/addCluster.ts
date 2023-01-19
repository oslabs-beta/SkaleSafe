import express from 'express';
const router = express.Router();

router.get('/', (req, res) => res.send('hello from Cluster router'));

// Add Cluster POST from Axios:
router.post('/', (req, res) => {
  console.log('from /add-cluster');
  console.log('req.body: ', req.body);
});

export default router;
