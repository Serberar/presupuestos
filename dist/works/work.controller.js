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
exports.WorkController = void 0;
const common_1 = require("@nestjs/common");
const work_entity_1 = require("./work.entity");
const work_service_1 = require("./work.service");
const swagger_1 = require("@nestjs/swagger");
let WorkController = class WorkController {
    constructor(workService) {
        this.workService = workService;
    }
    async findAll() {
        return this.workService.findAllWorks();
    }
    async findOne(id) {
        const work = await this.workService.findWorkById(id);
        if (!work) {
            throw new common_1.NotFoundException('Work not found');
        }
        return work;
    }
    async findByVehicle(name) {
        return this.workService.findWorksByVehicle(name);
    }
    async create(work) {
        return this.workService.createWork(work);
    }
    async update(id, work) {
        return this.workService.updateWork(id, work);
    }
    async remove(id) {
        await this.workService.removeWork(id);
    }
    async restore(id) {
        await this.workService.restoreWork(id);
    }
};
exports.WorkController = WorkController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene todos los trabajos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Todos los trabajos encontrados', type: work_entity_1.Work, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene un trabajo por su ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trabajo encontrado', type: work_entity_1.Work }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('vehicle/:name'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene trabajos por el nombre del vehículo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trabajos encontrados', type: work_entity_1.Work, isArray: true }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "findByVehicle", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crea un nuevo trabajo' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Trabajo creado exitosamente', type: work_entity_1.Work }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [work_entity_1.Work]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualiza un trabajo existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trabajo actualizado exitosamente', type: work_entity_1.Work }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, work_entity_1.Work]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina un Trabajo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trabajo eliminado exitosamente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('restore/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaura un Trabajo eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trabajo restaurado exitosamente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "restore", null);
exports.WorkController = WorkController = __decorate([
    (0, swagger_1.ApiTags)('Works'),
    (0, common_1.Controller)('works'),
    __metadata("design:paramtypes", [work_service_1.WorkService])
], WorkController);
//# sourceMappingURL=work.controller.js.map