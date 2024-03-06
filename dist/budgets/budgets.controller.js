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
exports.BudgetController = void 0;
const common_1 = require("@nestjs/common");
const budget_entity_1 = require("./budget.entity");
const budget_service_1 = require("./budget.service");
const swagger_1 = require("@nestjs/swagger");
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    async findAll() {
        return this.budgetService.findAllBudgets();
    }
    async findOne(id) {
        const budget = await this.budgetService.findBudgetById(id);
        if (!budget) {
            throw new common_1.NotFoundException('Budget not found');
        }
        return budget;
    }
    async create(budget, req) {
        const userId = req.headers['th-user'];
        return this.budgetService.createBudget(budget, userId);
    }
    async update(id, budget) {
        return this.budgetService.updateBudget(id, budget);
    }
    async remove(id) {
        await this.budgetService.removeBudget(id);
    }
    async restore(id) {
        await this.budgetService.restoreBudget(id);
    }
    async findLastBudgets(days) {
        return this.budgetService.findLastBudgets(days);
    }
};
exports.BudgetController = BudgetController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene un presupuesto por su ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Presupuesto encontrado', type: budget_entity_1.Budget }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene un presupuesto por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Todos los presupuestos encontrados', type: budget_entity_1.Budget }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crea un nuevo presupuesto' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Presupuesto creado exitosamente', type: budget_entity_1.Budget }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [budget_entity_1.Budget, Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualiza un presupuesto existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Presupuesto actualizado exitosamente', type: budget_entity_1.Budget }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, budget_entity_1.Budget]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina un presupuesto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Presupuesto eliminado exitosamente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('restore/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaura un presupuesto eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Presupuesto restaurado exitosamente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "restore", null);
__decorate([
    (0, common_1.Get)('last/:days'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene los presupuestos de los últimos días' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Presupuestos encontrados', type: budget_entity_1.Budget, isArray: true }),
    __param(0, (0, common_1.Param)('days')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "findLastBudgets", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.Controller)('budgets'),
    (0, swagger_1.ApiTags)('Budgets'),
    __metadata("design:paramtypes", [budget_service_1.BudgetService])
], BudgetController);
//# sourceMappingURL=budgets.controller.js.map