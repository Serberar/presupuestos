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
exports.Client = void 0;
const typeorm_1 = require("typeorm");
const budget_entity_1 = require("../budgets/budget.entity");
const swagger_1 = require("@nestjs/swagger");
let Client = class Client {
    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
};
exports.Client = Client;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID del cliente' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Client.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cliente Preferente', description: 'Texto descriptivo del cliente' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Client.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cliente@domain.com', description: 'Correo electrónico del cliente' }),
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Juan', description: 'Nombre del cliente' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Client.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'García', description: 'Apellido del cliente' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '666666666', description: 'Teléfono del cliente' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Particular', description: 'Tipo de cliente' }),
    (0, typeorm_1.Column)({ enum: ['particular', 'empresa'] }),
    __metadata("design:type", String)
], Client.prototype, "type", void 0);
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
        description: 'Presupuestos asignados a un cliente'
    }),
    (0, typeorm_1.OneToMany)(() => budget_entity_1.Budget, budget => budget.client),
    __metadata("design:type", Array)
], Client.prototype, "budgets", void 0);
exports.Client = Client = __decorate([
    (0, typeorm_1.Entity)()
], Client);
//# sourceMappingURL=client.entity.js.map