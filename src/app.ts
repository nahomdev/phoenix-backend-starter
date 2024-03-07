import express from 'express';
import { useLogger } from './logger';
 
 export default async function createApp(): Promise<Express.Application>{
     const app = express();

     const logger = useLogger();
     
     app.get('/test', (req, res) => {
         
         logger.info(req.query);   
         
         res.send('good!!!');
     })
     
     app.use('*', (req, res) => { 
         res.send('no url dude');
     })
     
     return app;
}
