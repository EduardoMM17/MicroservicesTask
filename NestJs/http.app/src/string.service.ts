import { Injectable } from "@nestjs/common";
import { ClientProxyFactory, Transport, ClientProxy } from "@nestjs/microservices";

@Injectable()
export class StringService {
    private client: ClientProxy;

    constructor(){
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8877,
              }
        });
    }

    public toUpperCase(string){
        return this.client.send<string, string>('transform', string);
    }
}
