import { Repository } from 'typeorm';
import { Work } from './work.entity';
import { Section } from '../sections/section.entity';
export declare class WorkService {
    private readonly workRepository;
    private readonly sectionRepository;
    constructor(workRepository: Repository<Work>, sectionRepository: Repository<Section>);
    findAllWorks(): Promise<Work[]>;
    findWorkById(id: number): Promise<Work>;
    findWorksByVehicle(name: string): Promise<Work[]>;
    createWork(workData: Partial<Work>): Promise<Work>;
    updateWork(id: number, updatedData: Partial<Work>): Promise<Work>;
    removeWork(id: number): Promise<void>;
    restoreWork(id: number): Promise<void>;
}
