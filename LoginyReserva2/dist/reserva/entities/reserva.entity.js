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
exports.Reserva = void 0;
const graphql_1 = require("@nestjs/graphql");
const cliente_entity_1 = require("../../cliente/entities/cliente.entity");
const paquete_entity_1 = require("../../paquete/entities/paquete.entity");
const typeorm_1 = require("typeorm");
let Reserva = class Reserva {
};
exports.Reserva = Reserva;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Reserva.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Reserva.prototype, "fechareserva", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Reserva.prototype, "ID_Cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, (cliente) => cliente.reservas, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_Cliente' }),
    (0, graphql_1.Field)(() => cliente_entity_1.Cliente),
    __metadata("design:type", cliente_entity_1.Cliente)
], Reserva.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Reserva.prototype, "ID_Paquete", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paquete_entity_1.Paquete, (paquete) => paquete.reservas, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_Paquete' }),
    (0, graphql_1.Field)(() => paquete_entity_1.Paquete),
    __metadata("design:type", paquete_entity_1.Paquete)
], Reserva.prototype, "paquete", void 0);
exports.Reserva = Reserva = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'reserva' })
], Reserva);
//# sourceMappingURL=reserva.entity.js.map