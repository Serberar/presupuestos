import { DataSource } from 'typeorm';
import { Section } from './section.entity';
export declare const sectionProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Section>;
    inject: string[];
}[];
