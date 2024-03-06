"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workProviders = void 0;
const work_entity_1 = require("./work.entity");
exports.workProviders = [
    {
        provide: 'WORK_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(work_entity_1.Work),
        inject: ['DATA_SOURCE']
    }
];
//# sourceMappingURL=work.providers.js.map