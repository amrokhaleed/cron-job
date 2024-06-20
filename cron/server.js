import { createServer } from 'vite';
import express from 'express';
import { job, count } from './cronjob.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

(async() => {
    const vite = await createServer({
        server: { middlewareMode: 'ssr' }
    });

    app.use(vite.middlewares);

    // Endpoint to get the current count
    app.get('/api/count', (req, res) => {
        console.log('GET /api/count hit');
        res.json({ count }); // Return count in JSON format
    });

    // Start the cron job
    job.start();
    console.log('Cron job is scheduled');

    // Start the Express server
    app.listen(3000, () => {
        console.log('Server is running at http://localhost:3000');
    });
})();