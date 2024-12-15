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
exports.Publicacion = void 0;
const graphql_1 = require("@nestjs/graphql");
const comentario_entity_1 = require("../../comentario/entities/comentario.entity");
const typeorm_1 = require("typeorm");
let Publicacion = class Publicacion {
};
exports.Publicacion = Publicacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Publicacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Publicacion.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Publicacion.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Publicacion.prototype, "fechapublicacion", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comentario_entity_1.Comentario]),
    (0, typeorm_1.OneToMany)(() => comentario_entity_1.Comentario, (comentario) => comentario.usuario),
    __metadata("design:type", comentario_entity_1.Comentario)
], Publicacion.prototype, "comentario", void 0);
exports.Publicacion = Publicacion = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'publiacion' })
], Publicacion);
//# sourceMappingURL=publicacion.entity.js.map