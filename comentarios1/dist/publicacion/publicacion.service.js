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
exports.PublicacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const publicacion_entity_1 = require("./entities/publicacion.entity");
const typeorm_2 = require("typeorm");
let PublicacionService = class PublicacionService {
    constructor(publicacionRepository) {
        this.publicacionRepository = publicacionRepository;
    }
    async create(createPublicacionInput) {
        const nuevo = this.publicacionRepository.create(createPublicacionInput);
        return await this.publicacionRepository.save(nuevo);
    }
    async findAll() {
        return await this.publicacionRepository.find();
    }
    async findOne(id) {
        return await this.publicacionRepository.findOneBy({ id });
    }
    async update(id, updatePublicacionInput) {
        const actualizar = await this.publicacionRepository.preload(updatePublicacionInput);
        if (!actualizar) {
            throw new Error("Usuario no encontrado");
        }
        return await this.publicacionRepository.save(actualizar);
    }
    async remove(id) {
        const borrar = await this.publicacionRepository.findOne({ where: { id } });
        if (!borrar) {
            throw new Error("Usuario no encontrado");
        }
        await this.publicacionRepository.remove(borrar);
        return { ...borrar, id };
    }
};
exports.PublicacionService = PublicacionService;
exports.PublicacionService = PublicacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(publicacion_entity_1.Publicacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PublicacionService);
//# sourceMappingURL=publicacion.service.js.map