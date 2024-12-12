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
exports.PaqueteResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const paquete_service_1 = require("./paquete.service");
const paquete_entity_1 = require("./entities/paquete.entity");
const create_paquete_input_1 = require("./dto/create-paquete.input");
const update_paquete_input_1 = require("./dto/update-paquete.input");
let PaqueteResolver = class PaqueteResolver {
    constructor(paqueteService) {
        this.paqueteService = paqueteService;
    }
    createPaquete(createPaqueteInput) {
        return this.paqueteService.create(createPaqueteInput);
    }
    findAll() {
        return this.paqueteService.findAll();
    }
    findOne(id) {
        return this.paqueteService.findOne(id);
    }
    updatePaquete(updatePaqueteInput) {
        return this.paqueteService.update(updatePaqueteInput.id, updatePaqueteInput);
    }
    removePaquete(id) {
        return this.paqueteService.remove(id);
    }
};
exports.PaqueteResolver = PaqueteResolver;
__decorate([
    (0, graphql_1.Mutation)(() => paquete_entity_1.Paquete),
    __param(0, (0, graphql_1.Args)('createPaqueteInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paquete_input_1.CreatePaqueteInput]),
    __metadata("design:returntype", Promise)
], PaqueteResolver.prototype, "createPaquete", null);
__decorate([
    (0, graphql_1.Query)(() => [paquete_entity_1.Paquete], { name: 'paquetes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaqueteResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => paquete_entity_1.Paquete, { name: 'paquete' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaqueteResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => paquete_entity_1.Paquete),
    __param(0, (0, graphql_1.Args)('updatePaqueteInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_paquete_input_1.UpdatePaqueteInput]),
    __metadata("design:returntype", Promise)
], PaqueteResolver.prototype, "updatePaquete", null);
__decorate([
    (0, graphql_1.Mutation)(() => paquete_entity_1.Paquete),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaqueteResolver.prototype, "removePaquete", null);
exports.PaqueteResolver = PaqueteResolver = __decorate([
    (0, graphql_1.Resolver)(() => paquete_entity_1.Paquete),
    __metadata("design:paramtypes", [paquete_service_1.PaqueteService])
], PaqueteResolver);
//# sourceMappingURL=paquete.resolver.js.map