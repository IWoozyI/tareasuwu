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
exports.PublicacionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const publicacion_service_1 = require("./publicacion.service");
const publicacion_entity_1 = require("./entities/publicacion.entity");
const create_publicacion_input_1 = require("./dto/create-publicacion.input");
const update_publicacion_input_1 = require("./dto/update-publicacion.input");
let PublicacionResolver = class PublicacionResolver {
    constructor(publicacionService) {
        this.publicacionService = publicacionService;
    }
    createPublicacion(createPublicacionInput) {
        return this.publicacionService.create(createPublicacionInput);
    }
    findAll() {
        return this.publicacionService.findAll();
    }
    findOne(id) {
        return this.publicacionService.findOne(id);
    }
    updatePublicacion(updatePublicacionInput) {
        return this.publicacionService.update(updatePublicacionInput.id, updatePublicacionInput);
    }
    removePublicacion(id) {
        return this.publicacionService.remove(id);
    }
};
exports.PublicacionResolver = PublicacionResolver;
__decorate([
    (0, graphql_1.Mutation)(() => publicacion_entity_1.Publicacion),
    __param(0, (0, graphql_1.Args)('createPublicacionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_publicacion_input_1.CreatePublicacionInput]),
    __metadata("design:returntype", Promise)
], PublicacionResolver.prototype, "createPublicacion", null);
__decorate([
    (0, graphql_1.Query)(() => [publicacion_entity_1.Publicacion], { name: 'publicaciones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublicacionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => publicacion_entity_1.Publicacion, { name: 'publicacion' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicacionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => publicacion_entity_1.Publicacion),
    __param(0, (0, graphql_1.Args)('updatePublicacionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_publicacion_input_1.UpdatePublicacionInput]),
    __metadata("design:returntype", Promise)
], PublicacionResolver.prototype, "updatePublicacion", null);
__decorate([
    (0, graphql_1.Mutation)(() => publicacion_entity_1.Publicacion),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicacionResolver.prototype, "removePublicacion", null);
exports.PublicacionResolver = PublicacionResolver = __decorate([
    (0, graphql_1.Resolver)(() => publicacion_entity_1.Publicacion),
    __metadata("design:paramtypes", [publicacion_service_1.PublicacionService])
], PublicacionResolver);
//# sourceMappingURL=publicacion.resolver.js.map