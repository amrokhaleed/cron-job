import express from 'express';
import { count } from '../cronjob.js';

const router = express.Router();

// Define the route for getting the current count
router.get('/count', (req, res) => {
    console.log('GET /api/count hit');
    res.json({ count }); // Return count in JSON format
});

export default router;