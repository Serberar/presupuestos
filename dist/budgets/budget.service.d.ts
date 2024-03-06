import { Repository } from 'typeorm';
import { Budget } from './budget.entity';
import { Client } from '../clients/client.entity';
import { Work } from '../works/work.entity';
export declare class BudgetService {
    private budgetRepository;
    private clientRepository;
    private workRepository;
    constructor(budgetRepository: Repository<Budget>, clientRepository: Repository<Client>, workRepository: Repository<Work>);
    findAllBudgets(): Promise<Budget[]>;
    findBudgetById(id: number): Promise<Budget>;
    findLastBudgets(days: number): Promise<Budget[]>;
    createBudget(budgetData: any, userId: number): Promise<Budget>;
    updateBudget(id: number, updatedData: Partial<Budget>): Promise<Budget>;
    removeBudget(id: number): Promise<void>;
    restoreBudget(id: number): Promise<void>;
}
