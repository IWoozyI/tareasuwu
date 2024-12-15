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
exports.Comentario = void 0;
const graphql_1 = require("@nestjs/graphql");
const publicacion_entity_1 = require("../../publicacion/entities/publicacion.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Comentario = class Comentario {
};
exports.Comentario = Comentario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Comentario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Comentario.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Comentario.prototype, "fechayhora", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Comentario.prototype, "ID_Usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.comentario, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_Usuario' }),
    (0, graphql_1.Field)(() => usuario_entity_1.Usuario),
    __metadata("design:type", usuario_entity_1.Usuario)
], Comentario.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Comentario.prototype, "ID_Publicacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => publicacion_entity_1.Publicacion, (prublicacion) => prublicacion.comentario, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_Publicacion' }),
    (0, graphql_1.Field)(() => publicacion_entity_1.Publicacion),
    __metadata("design:type", publicacion_entity_1.Publicacion)
], Comentario.prototype, "publicacion", void 0);
exports.Comentario = Comentario = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'comentario' })
], Comentario);
//# sourceMappingURL=comentario.entity.js.map