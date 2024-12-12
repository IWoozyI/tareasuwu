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
exports.RolResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const rol_service_1 = require("./rol.service");
const rol_entity_1 = require("./entities/rol.entity");
const create_rol_input_1 = require("./dto/create-rol.input");
const update_rol_input_1 = require("./dto/update-rol.input");
let RolResolver = class RolResolver {
    constructor(rolService) {
        this.rolService = rolService;
    }
    createRol(createRolInput) {
        return this.rolService.create(createRolInput);
    }
    findAll() {
        return this.rolService.findAll();
    }
    findOne(id) {
        return this.rolService.findOne(id);
    }
    updateRol(updateRolInput) {
        return this.rolService.update(updateRolInput.id, updateRolInput);
    }
    removeRol(id) {
        return this.rolService.remove(id);
    }
};
exports.RolResolver = RolResolver;
__decorate([
    (0, graphql_1.Mutation)(() => rol_entity_1.Rol),
    __param(0, (0, graphql_1.Args)('createRolInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rol_input_1.CreateRolInput]),
    __metadata("design:returntype", void 0)
], RolResolver.prototype, "createRol", null);
__decorate([
    (0, graphql_1.Query)(() => [rol_entity_1.Rol], { name: 'rol' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => rol_entity_1.Rol, { name: 'rol' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => rol_entity_1.Rol),
    __param(0, (0, graphql_1.Args)('updateRolInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_rol_input_1.UpdateRolInput]),
    __metadata("design:returntype", void 0)
], RolResolver.prototype, "updateRol", null);
__decorate([
    (0, graphql_1.Mutation)(() => rol_entity_1.Rol),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolResolver.prototype, "removeRol", null);
exports.RolResolver = RolResolver = __decorate([
    (0, graphql_1.Resolver)(() => rol_entity_1.Rol),
    __metadata("design:paramtypes", [rol_service_1.RolService])
], RolResolver);
//# sourceMappingURL=rol.resolver.js.map