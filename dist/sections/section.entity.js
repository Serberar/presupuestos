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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const typeorm_1 = require("typeorm");
const work_entity_1 = require("../works/work.entity");
const swagger_1 = require("@nestjs/swagger");
let Section = class Section {
};
exports.Section = Section;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID de la sección' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Section.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Modelo Opel Astra', description: 'Texto descriptivo del elemento' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Section.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'seats', description: 'Nombre de la sección' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Section.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'car', description: 'Tipo de vehículo al que está asociada la sección' }),
    (0, typeorm_1.Column)({ type: 'enum', enum: ['all-terrain', 'car', 'motorbike', 'tow-vehicle'] }),
    __metadata("design:type", String)
], Section.prototype, "vehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de vehículo al que está asociada la sección' }),
    (0, typeorm_1.OneToMany)(() => work_entity_1.Work, work => work.section),
    __metadata("design:type", Array)
], Section.prototype, "works", void 0);
exports.Section = Section = __decorate([
    (0, typeorm_1.Entity)()
], Section);
//# sourceMappingURL=section.entity.js.map