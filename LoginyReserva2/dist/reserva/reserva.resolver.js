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
exports.ReservaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reserva_service_1 = require("./reserva.service");
const reserva_entity_1 = require("./entities/reserva.entity");
const create_reserva_input_1 = require("./dto/create-reserva.input");
const update_reserva_input_1 = require("./dto/update-reserva.input");
const reserva_gateway_1 = require("./reserva.gateway");
const pubsub_1 = require("../pubsub");
let ReservaResolver = class ReservaResolver {
    constructor(reservaService, reservaGateway) {
        this.reservaService = reservaService;
        this.reservaGateway = reservaGateway;
    }
    async createReserva(input) {
        const nuevaReserva = this.reservaService.create(input);
        pubsub_1.pubSub.publish('reservaCreada', { reservaCreada: nuevaReserva });
        this.reservaGateway.emitReservaActualizada('nuevaReserva', nuevaReserva);
        return nuevaReserva;
    }
    async findAll() {
        return this.reservaService.findAll();
    }
    async updateReserva(input) {
        const reserva = this.reservaService.update(input.id, input);
        pubsub_1.pubSub.publish('reservaActualizada', { reservaActualizada: reserva });
        this.reservaGateway.emitReservaActualizada('actualizarReserva', reserva);
        return reserva;
    }
    reservaCreada() {
        return pubsub_1.pubSub.asyncIterator('reservaCreada');
    }
    reservaActualizada() {
        return pubsub_1.pubSub.asyncIterator('reservaActualizada');
    }
};
exports.ReservaResolver = ReservaResolver;
__decorate([
    (0, graphql_1.Mutation)(() => reserva_entity_1.Reserva),
    __param(0, (0, graphql_1.Args)('createReservaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reserva_input_1.CreateReservaInput]),
    __metadata("design:returntype", Promise)
], ReservaResolver.prototype, "createReserva", null);
__decorate([
    (0, graphql_1.Query)(() => [reserva_entity_1.Reserva], { name: 'reservas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => reserva_entity_1.Reserva),
    __param(0, (0, graphql_1.Args)('updateReservaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_reserva_input_1.UpdateReservaInput]),
    __metadata("design:returntype", Promise)
], ReservaResolver.prototype, "updateReserva", null);
__decorate([
    (0, graphql_1.Subscription)(() => reserva_entity_1.Reserva, { name: 'reservaCreada' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservaResolver.prototype, "reservaCreada", null);
__decorate([
    (0, graphql_1.Subscription)(() => reserva_entity_1.Reserva, { name: 'reservaActualizada' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservaResolver.prototype, "reservaActualizada", null);
exports.ReservaResolver = ReservaResolver = __decorate([
    (0, graphql_1.Resolver)(() => reserva_entity_1.Reserva),
    __metadata("design:paramtypes", [reserva_service_1.ReservaService,
        reserva_gateway_1.ReservaGateway])
], ReservaResolver);
//# sourceMappingURL=reserva.resolver.js.map