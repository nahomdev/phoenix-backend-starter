import express from 'express';
import { useLogger } from './logger';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import useEnv from './utils/useEnv';
 
const logger = useLogger();
const env = useEnv();

export default async function createApp(): Promise<Express.Application>{
    const app = express();

    app.use(express.json({ limit: env.get('MAX_PAYLOAD_SIZE')}));

    app.use(helmet());

    app.use(cookieParser());

    app.disabled('x-powered-by');

    app.use((_req, res, next) => {
        res.setHeader('x-powered-by', 'phoenix');
        next();
    })

    app.use(cors({
        origin: env.get('CORS_ALLOWED_ORIGIN'),
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true
    }))
  
    app.get('/greeting', (_req, res) => {
        res.status(200).json({
            status: 'success',
            message: "Hello world!"
        })
    })
 
     app.use('*', (req, res) => {
         
         logger.error(`unable to find the requested url: ${req.originalUrl} on this server!`);

         res.status(404).json({
             status: 'fail',
             message: `unable to find requested URL ${req.originalUrl} on this server!`
         })
     })
     
     return app;
}
