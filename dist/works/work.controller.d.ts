import { Work } from './work.entity';
import { WorkService } from './work.service';
export declare class WorkController {
    private readonly workService;
    constructor(workService: WorkService);
    findAll(): Promise<Work[]>;
    findOne(id: number): Promise<Work>;
    findByVehicle(name: string): Promise<Work[]>;
    create(work: Work): Promise<Work>;
    update(id: number, work: Work): Promise<Work>;
    remove(id: number): Promise<void>;
    restore(id: number): Promise<void>;
}
