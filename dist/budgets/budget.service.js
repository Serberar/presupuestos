"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BudgetService = class BudgetService {
    constructor(budgetRepository, clientRepository, workRepository) {
        this.budgetRepository = budgetRepository;
        this.clientRepository = clientRepository;
        this.workRepository = workRepository;
    }
    async findAllBudgets() {
        return this.budgetRepository.find({
            relations: ['works']
        });
    }
    async findBudgetById(id) {
        const budget = await this.budgetRepository.findOne({
            where: { id },
            relations: ['works']
        });
        if (!budget) {
            throw new common_1.NotFoundException('Budget not found');
        }
        return budget;
    }
    async findLastBudgets(days) {
        const lastDate = new Date();
        lastDate.setDate(lastDate.getDate() - days);
        return this.budgetRepository
            .createQueryBuilder('budget')
            .where('budget.createdAt >= :lastDate', { lastDate })
            .getMany();
    }
    async createBudget(budgetData, userId) {
        let client;
        if (budgetData.client.email) {
            client = await this.clientRepository.findOne({ where: { email: budgetData.client.email } });
        }
        else if (budgetData.client.phone) {
            client = await this.clientRepository.findOne({ where: { phone: budgetData.client.phone } });
        }
        const works = [];
        for (const workData of budgetData.works) {
            const workId = workData.id;
            const work = await this.workRepository.findOne({ where: { id: workId } });
            if (!work) {
                throw new common_1.NotFoundException('Work not found');
            }
            works.push(work);
        }
        const newBudget = this.budgetRepository.create({
            bulletinE12V: budgetData.bulletinE12V,
            bulletinE230V: budgetData.bulletinE230V,
            bulletinG: budgetData.bulletinG,
            certificate: budgetData.certificate,
            client: client,
            description: budgetData.description,
            user: budgetData.user,
            vehicle: budgetData.vehicle,
            works: works,
            createdAt: new Date()
        });
        return this.budgetRepository.save(newBudget);
    }
    async updateBudget(id, updatedData) {
        const existingBudget = await this.findBudgetById(id);
        const updatedBudget = Object.assign(existingBudget, updatedData);
        return this.budgetRepository.save(updatedBudget);
    }
    async removeBudget(id) {
        const budget = await this.findBudgetById(id);
        if (!budget) {
            throw new common_1.NotFoundException('Budget not found');
        }
        budget.deletedAt = new Date();
        await this.budgetRepository.save(budget);
    }
    async restoreBudget(id) {
        const restoredBudget = await this.budgetRepository.restore(id);
        if (!restoredBudget) {
            throw new common_1.NotFoundException('Budget not found');
        }
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BUDGET_REPOSITORY')),
    __param(1, (0, common_1.Inject)('CLIENT_REPOSITORY')),
    __param(2, (0, common_1.Inject)('WORK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], BudgetService);
//# sourceMappingURL=budget.service.js.map