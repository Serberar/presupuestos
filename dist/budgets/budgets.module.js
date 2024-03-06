"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetsModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const budgets_controller_1 = require("./budgets.controller");
const budget_service_1 = require("./budget.service");
const budgets_providers_1 = require("./budgets.providers");
const clients_providers_1 = require("../clients/clients.providers");
const work_providers_1 = require("../works/work.providers");
let BudgetsModule = class BudgetsModule {
};
exports.BudgetsModule = BudgetsModule;
exports.BudgetsModule = BudgetsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [budgets_controller_1.BudgetController],
        providers: [...work_providers_1.workProviders, ...budgets_providers_1.budgetsProviders, ...clients_providers_1.clientProviders, budget_service_1.BudgetService],
    })
], BudgetsModule);
//# sourceMappingURL=budgets.module.js.map