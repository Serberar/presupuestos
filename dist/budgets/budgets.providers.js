"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.budgetsProviders = void 0;
const budget_entity_1 = require("./budget.entity");
exports.budgetsProviders = [
    {
        provide: 'BUDGET_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(budget_entity_1.Budget),
        inject: ['DATA_SOURCE']
    }
];
//# sourceMappingURL=budgets.providers.js.map