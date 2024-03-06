import express from 'express';
 
 export default async function createApp(): Promise<Express.Application>{
     const app = express();
     

     return app;
}
