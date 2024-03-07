 
import createApp from "./app";
import * as http from "http";
import dotenv from 'dotenv';
import { useLogger } from './logger';
import useEnv from "./utils/useEnv";

dotenv.config({ path: '.env' }); 

const logger = useLogger();
const env = useEnv();

export  async function createServer(): Promise<http.Server>{

    const server = http.createServer(await createApp());

    return server;
}

export async function startServer(): Promise<void>{

    
    const server = await createServer();
 
    const port = env.get('PORT');

    server.listen(port, () => {
        logger.info(`server is up and running on port ${port}`)
    }) 
}


startServer();