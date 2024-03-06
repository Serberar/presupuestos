import { Repository } from 'typeorm';
import { Client } from './client.entity';
export declare class ClientService {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    findAll(): Promise<Client[]>;
}
