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
exports.Paquete = void 0;
const graphql_1 = require("@nestjs/graphql");
const reserva_entity_1 = require("../../reserva/entities/reserva.entity");
const typeorm_1 = require("typeorm");
let Paquete = class Paquete {
};
exports.Paquete = Paquete;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Paquete.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Paquete.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Paquete.prototype, "precio", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reserva_entity_1.Reserva]),
    (0, typeorm_1.OneToMany)(() => reserva_entity_1.Reserva, (reserva) => reserva.paquete),
    __metadata("design:type", Array)
], Paquete.prototype, "reservas", void 0);
exports.Paquete = Paquete = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'paquete' })
], Paquete);
//# sourceMappingURL=paquete.entity.js.map