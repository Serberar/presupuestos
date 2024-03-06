import { Section } from '../sections/section.entity';
import { Budget } from '../budgets/budget.entity';
export declare class Work {
    id: number;
    description: string;
    name: string;
    price1: number;
    price2: number;
    price3: number;
    price4: number;
    priceGapMod: number;
    section: Section;
    budget: Budget;
    deletedAt: Date;
}
