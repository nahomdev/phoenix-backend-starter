 import createApp from "./app";
import * as http from "http";


export async function createServer(): Promise<http.Server>{

    const server = http.createServer(await createApp);

    return server;
}

export async function startServer(): Promise<void>{
    
    const server = await createServer();

    server.listen(3000, () => {
        console.log(`server is up and running on port 3000`)
    }) 
}


startServer();