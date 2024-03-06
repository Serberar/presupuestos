import { DataSource } from 'typeorm';
import { Budget } from './budget.entity';
export declare const budgetsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Budget>;
    inject: string[];
}[];
