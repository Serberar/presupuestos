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
exports.Work = void 0;
const typeorm_1 = require("typeorm");
const section_entity_1 = require("../sections/section.entity");
const budget_entity_1 = require("../budgets/budget.entity");
const swagger_1 = require("@nestjs/swagger");
let Work = class Work {
};
exports.Work = Work;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID del trabajo' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Work.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Asientos delanteros', description: 'Texto descriptivo del elemento' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Work.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Asientos', description: 'Nombre visualizado en frontal' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Work.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '100.00', description: 'Precio 1' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Work.prototype, "price1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '150.00', description: 'Precio 2' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Work.prototype, "price2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '200.00', description: 'Precio 3' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Work.prototype, "price3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '250.00', description: 'Precio 4' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Work.prototype, "price4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Modificación sobre el precio final del presupuesto' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Work.prototype, "priceGapMod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {
            "id": 1,
            "description": "reparacion de asientos",
            "name": "car-body",
            "vehicle": "car"
        }, description: 'Sección' }),
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, section => section.works, { nullable: true }),
    __metadata("design:type", section_entity_1.Section)
], Work.prototype, "section", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            "id": 74,
            "bulletinE12V": 12,
            "bulletinE230V": 230,
            "bulletinG": 150,
            "certificate": 100,
            "description": "Modelo Opel Astra",
            "user": 15,
            "vehicle": "car",
            "createdAt": "2024-03-06T17:38:56.000Z",
            "deletedAt": null,
            "client": {
                "id": 2,
                "description": "Cliente preferente",
                "email": "cliente@domain.com",
                "firstName": "Juan",
                "lastName": "García",
                "phone": "666666666",
                "type": "particular"
            }
        },
        description: 'Presupuesto asignado al trabajo'
    }),
    (0, typeorm_1.ManyToOne)(() => budget_entity_1.Budget, budget => budget.works, { nullable: true }),
    __metadata("design:type", budget_entity_1.Budget)
], Work.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-03-06 18:38:56', description: 'Fecha de eliminación del trabajo' }),
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Work.prototype, "deletedAt", void 0);
exports.Work = Work = __decorate([
    (0, typeorm_1.Entity)()
], Work);
//# sourceMappingURL=work.entity.js.map