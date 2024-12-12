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
exports.ReservaService = void 0;
const common_1 = require("@nestjs/common");
const reserva_entity_1 = require("./entities/reserva.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ReservaService = class ReservaService {
    constructor(reservaRepository) {
        this.reservaRepository = reservaRepository;
    }
    async create(createReservaInput) {
        const crear = this.reservaRepository.create(createReservaInput);
        return await this.reservaRepository.save(crear);
    }
    async findAll() {
        return await this.reservaRepository.find({
            relations: ['cliente', 'paquete'],
        });
    }
    async findOne(id) {
        return await this.reservaRepository.findOne({
            where: { id },
            relations: ['cliente', 'paquete'],
        });
    }
    async update(id, updateReservaInput) {
        const cambio = await this.reservaRepository.preload(updateReservaInput);
        if (!cambio) {
            throw new Error("Cliente no encontrado");
        }
        return await this.reservaRepository.save(cambio);
    }
    async remove(id) {
        const remover = await this.reservaRepository.findOne({ where: { id }, relations: ['cliente', 'paquete'], });
        if (!remover) {
            throw new Error("Cliente no encontrado");
        }
        await this.reservaRepository.remove(remover);
        return { ...remover, id };
    }
};
exports.ReservaService = ReservaService;
exports.ReservaService = ReservaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reserva_entity_1.Reserva)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReservaService);
//# sourceMappingURL=reserva.service.js.map