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
exports.AspiranteController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const aspirante_service_1 = require("./aspirante.service");
const create_aspirante_dto_1 = require("./dto/create-aspirante.dto");
const update_aspirante_dto_1 = require("./dto/update-aspirante.dto");
let AspiranteController = class AspiranteController {
    constructor(aspiranteService) {
        this.aspiranteService = aspiranteService;
    }
    create(createAspiranteDto) {
        return this.aspiranteService.create(createAspiranteDto);
    }
    findAll() {
        return this.aspiranteService.findAll();
    }
    findOne(id) {
        return this.aspiranteService.findOne(id);
    }
    update(updateAspiranteDto) {
        return this.aspiranteService.update(updateAspiranteDto.id, updateAspiranteDto);
    }
    remove(id) {
        return this.aspiranteService.remove(id);
    }
};
exports.AspiranteController = AspiranteController;
__decorate([
    (0, microservices_1.MessagePattern)('createAspirante'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aspirante_dto_1.CreateAspiranteDto]),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllAspirante'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneAspirante'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateAspirante'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_aspirante_dto_1.UpdateAspiranteDto]),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeAspirante'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "remove", null);
exports.AspiranteController = AspiranteController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [aspirante_service_1.AspiranteService])
], AspiranteController);
//# sourceMappingURL=aspirante.controller.js.map