import express, { Request, Response } from 'express';
import { authRoutes } from './auth.routes';
import { blogRoutes } from './blog.routes';

const routes = express.Router();


routes.get('/', (req: Request, res: Response) => {
    try {
        res.send('Welcome to Engima Api version 1.0 ');
    } catch (error) {
    }
});


routes.use("/blog", blogRoutes)

routes.use("/auth", authRoutes)


export = routes;
