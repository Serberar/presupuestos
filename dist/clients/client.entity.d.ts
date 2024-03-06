import { Budget } from '../budgets/budget.entity';
export declare class Client {
    id: number;
    description: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    type: string;
    budgets: Budget[];
    get name(): string;
}
