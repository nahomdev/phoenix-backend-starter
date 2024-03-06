 
import createApp from "./app";
import * as http from "http";
import dotenv from 'dotenv';
import { useLogger } from './logger';

dotenv.config({ path: '.env' }); 

const logger = useLogger();

export  async function createServer(): Promise<http.Server>{

    const server = http.createServer(await createApp);

    return server;
}

export async function startServer(): Promise<void>{

    
    const server = await createServer();
 
    const port = process.env.PORT || 9001;

    server.listen(port, () => {
        logger.info(`server is up and running on port ${port}`)
    }) 
}


startServer();