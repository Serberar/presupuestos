"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksModule = void 0;
const common_1 = require("@nestjs/common");
const work_controller_1 = require("./work.controller");
const work_service_1 = require("./work.service");
const work_providers_1 = require("./work.providers");
const database_module_1 = require("../database/database.module");
const section_providers_1 = require("../sections/section.providers");
let WorksModule = class WorksModule {
};
exports.WorksModule = WorksModule;
exports.WorksModule = WorksModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [work_controller_1.WorkController],
        providers: [...section_providers_1.sectionProviders, ...work_providers_1.workProviders, work_service_1.WorkService],
    })
], WorksModule);
//# sourceMappingURL=works.module.js.map