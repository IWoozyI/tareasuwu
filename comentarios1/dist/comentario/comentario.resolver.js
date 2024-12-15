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
exports.ComentarioResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const comentario_service_1 = require("./comentario.service");
const comentario_entity_1 = require("./entities/comentario.entity");
const create_comentario_input_1 = require("./dto/create-comentario.input");
const update_comentario_input_1 = require("./dto/update-comentario.input");
let ComentarioResolver = class ComentarioResolver {
    constructor(comentarioService) {
        this.comentarioService = comentarioService;
    }
    createComentario(createComentarioInput) {
        return this.comentarioService.create(createComentarioInput);
    }
    getComentariosPDFLink() {
        return 'http://localhost:3000/comentarios/pdf';
    }
    findAll() {
        return this.comentarioService.findAll();
    }
    findOne(id) {
        return this.comentarioService.findOne(id);
    }
    updateComentario(updateComentarioInput) {
        return this.comentarioService.update(updateComentarioInput.id, updateComentarioInput);
    }
    removeComentario(id) {
        return this.comentarioService.remove(id);
    }
};
exports.ComentarioResolver = ComentarioResolver;
__decorate([
    (0, graphql_1.Mutation)(() => comentario_entity_1.Comentario),
    __param(0, (0, graphql_1.Args)('createComentarioInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comentario_input_1.CreateComentarioInput]),
    __metadata("design:returntype", Promise)
], ComentarioResolver.prototype, "createComentario", null);
__decorate([
    (0, graphql_1.Query)(() => String, { name: 'getComentariosPDFLink' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ComentarioResolver.prototype, "getComentariosPDFLink", null);
__decorate([
    (0, graphql_1.Query)(() => [comentario_entity_1.Comentario], { name: 'comentarios' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComentarioResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => comentario_entity_1.Comentario, { name: 'comentario' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComentarioResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => comentario_entity_1.Comentario),
    __param(0, (0, graphql_1.Args)('updateComentarioInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_comentario_input_1.UpdateComentarioInput]),
    __metadata("design:returntype", Promise)
], ComentarioResolver.prototype, "updateComentario", null);
__decorate([
    (0, graphql_1.Mutation)(() => comentario_entity_1.Comentario),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComentarioResolver.prototype, "removeComentario", null);
exports.ComentarioResolver = ComentarioResolver = __decorate([
    (0, graphql_1.Resolver)(() => comentario_entity_1.Comentario),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioResolver);
//# sourceMappingURL=comentario.resolver.js.map