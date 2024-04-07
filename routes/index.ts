import express, { Request, Response } from 'express';
import { blogRoutes } from './blog.routes';

const routes = express.Router();


routes.get('/', (req: Request, res: Response) => {
    try {
        res.send('Welcome to Engima Api version 1.0 ');
    } catch (error) {
    }
});


routes.use("/blog", blogRoutes)


export = routes;
