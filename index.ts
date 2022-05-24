import express, { Request, Response } from 'express';
import { chalkLog } from './devUtils/chalkBlock';

const app = express();

const port: number = 3007;

app.get('/', (req: Request, res: Response) => {
    chalkLog('Request Received');
    res.send('Hello World');
});

app.listen(port);
