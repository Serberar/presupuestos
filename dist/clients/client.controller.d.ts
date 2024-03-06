import { Client } from './client.entity';
import { ClientService } from './client.service';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    findAll(): Promise<Client[]>;
}
