"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaModule = void 0;
const common_1 = require("@nestjs/common");
const reserva_service_1 = require("./reserva.service");
const reserva_resolver_1 = require("./reserva.resolver");
const reserva_entity_1 = require("./entities/reserva.entity");
const typeorm_1 = require("@nestjs/typeorm");
const cliente_entity_1 = require("../cliente/entities/cliente.entity");
const paquete_entity_1 = require("../paquete/entities/paquete.entity");
const reserva_gateway_1 = require("./reserva.gateway");
let ReservaModule = class ReservaModule {
};
exports.ReservaModule = ReservaModule;
exports.ReservaModule = ReservaModule = __decorate([
    (0, common_1.Module)({
        providers: [reserva_resolver_1.ReservaResolver, reserva_service_1.ReservaService, reserva_gateway_1.ReservaGateway],
        imports: [typeorm_1.TypeOrmModule.forFeature([reserva_entity_1.Reserva, cliente_entity_1.Cliente, paquete_entity_1.Paquete])],
        exports: [typeorm_1.TypeOrmModule]
    })
], ReservaModule);
//# sourceMappingURL=reserva.module.js.map