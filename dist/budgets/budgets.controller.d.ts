import { Budget } from './budget.entity';
import { BudgetService } from './budget.service';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    findAll(): Promise<Budget[]>;
    findOne(id: number): Promise<Budget>;
    create(budget: Budget, req: any): Promise<Budget>;
    update(id: number, budget: Budget): Promise<Budget>;
    remove(id: number): Promise<void>;
    restore(id: number): Promise<void>;
    findLastBudgets(days: number): Promise<Budget[]>;
}
