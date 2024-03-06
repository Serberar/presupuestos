import { Client } from '../clients/client.entity';
import { Work } from '../works/work.entity';
export declare class Budget {
    id: number;
    bulletinE12V: number;
    bulletinE230V: number;
    bulletinG: number;
    certificate: number;
    description: string;
    user: number;
    vehicle: string;
    createdAt: Date;
    deletedAt: Date;
    works: Work[];
    client: Client;
}
