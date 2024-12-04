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
exports.RpracticaController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rpractica_service_1 = require("./rpractica.service");
const create_rpractica_dto_1 = require("./dto/create-rpractica.dto");
const update_rpractica_dto_1 = require("./dto/update-rpractica.dto");
let RpracticaController = class RpracticaController {
    constructor(rpracticaService) {
        this.rpracticaService = rpracticaService;
    }
    create(createRpracticaDto) {
        return this.rpracticaService.create(createRpracticaDto);
    }
    findAll() {
        return this.rpracticaService.findAll();
    }
    findOne(id) {
        return this.rpracticaService.findOne(id);
    }
    update(updateRpracticaDto) {
        return this.rpracticaService.update(updateRpracticaDto.id, updateRpracticaDto);
    }
    remove(id) {
        return this.rpracticaService.remove(id);
    }
};
exports.RpracticaController = RpracticaController;
__decorate([
    (0, microservices_1.MessagePattern)('createRpractica'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rpractica_dto_1.CreateRpracticaDto]),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get-rpractica' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneRpractica'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateRpractica'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_rpractica_dto_1.UpdateRpracticaDto]),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeRpractica'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "remove", null);
exports.RpracticaController = RpracticaController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [rpractica_service_1.RpracticaService])
], RpracticaController);
//# sourceMappingURL=rpractica.controller.js.map