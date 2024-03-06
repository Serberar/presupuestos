"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionProviders = void 0;
const section_entity_1 = require("./section.entity");
exports.sectionProviders = [
    {
        provide: 'SECTION_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(section_entity_1.Section),
        inject: ['DATA_SOURCE']
    }
];
//# sourceMappingURL=section.providers.js.map