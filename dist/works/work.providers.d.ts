import { DataSource } from 'typeorm';
import { Work } from './work.entity';
export declare const workProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Work>;
    inject: string[];
}[];
