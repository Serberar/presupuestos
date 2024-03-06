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
exports.Budget = void 0;
const typeorm_1 = require("typeorm");
const client_entity_1 = require("../clients/client.entity");
const work_entity_1 = require("../works/work.entity");
const swagger_1 = require("@nestjs/swagger");
let Budget = class Budget {
};
exports.Budget = Budget;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID del presupuesto', default: 0 }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Budget.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'Importe del boletín eléctrico a 12V', default: 0 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Budget.prototype, "bulletinE12V", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '230', description: 'Importe del boletín eléctrico a 230V', default: 0 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Budget.prototype, "bulletinE230V", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '150.00', description: 'Importe boletín de gas', default: 0 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Budget.prototype, "bulletinG", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '100.00', description: 'Importe del certificado de taller', default: 0 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Budget.prototype, "certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Modelo Opel Astra', description: 'Texto descriptivo del elemento' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Budget.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '15', description: 'Id del usuario que realiza el presupuesto' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Budget.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'car', description: 'Tipo de vehículo al que está asociada la sección' }),
    (0, typeorm_1.Column)({ enum: ['all-terrain', 'car', 'motorbike', 'tow-vehicle'] }),
    __metadata("design:type", String)
], Budget.prototype, "vehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-06 17:37:32', description: 'Fecha de creación del presupuesto' }),
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Budget.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-03-06 18:38:56', description: 'Fecha de eliminación del presupuesto' }),
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Budget.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [
            {
                "id": 1,
                "description": "",
                "name": "1 pieza",
                "price1": "250",
                "price2": "45",
                "price3": "35",
                "price4": "25",
                "priceGapMod": "0",
                "deletedAt": null
            }
        ], description: 'Trabajo asociado a un presupuesto' }),
    (0, typeorm_1.OneToMany)(() => work_entity_1.Work, work => work.budget),
    __metadata("design:type", Array)
], Budget.prototype, "works", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            "id": 2,
            "description": "Cliente preferente",
            "email": "cliente@domain.com",
            "firstName": "Juan",
            "lastName": "García",
            "phone": "666666666",
            "type": "particular"
        },
        description: 'Cliente que solicita el presupuesto'
    }),
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, client => client.budgets, { eager: true, cascade: true }),
    __metadata("design:type", client_entity_1.Client)
], Budget.prototype, "client", void 0);
exports.Budget = Budget = __decorate([
    (0, typeorm_1.Entity)()
], Budget);
//# sourceMappingURL=budget.entity.js.map