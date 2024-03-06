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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const client_entity_1 = require("./client.entity");
const client_service_1 = require("./client.service");
const swagger_1 = require("@nestjs/swagger");
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async findAll() {
        return this.clientService.findAll();
    }
};
exports.ClientController = ClientController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene todos los clientes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Todos los clientes encontrados', type: client_entity_1.Client }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "findAll", null);
exports.ClientController = ClientController = __decorate([
    (0, common_1.Controller)('clients'),
    (0, swagger_1.ApiTags)('Clients'),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientController);
//# sourceMappingURL=client.controller.js.map