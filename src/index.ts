import express, { Request, Response } from 'express';

const app = express();

// Define a route
app.get('/status', (req: Request, res: Response): void => {
    res.json({ status: 'OK', message: 'Infrastructure is up and running' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
