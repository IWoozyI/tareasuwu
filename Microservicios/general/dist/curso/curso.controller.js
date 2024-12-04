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
exports.CursoController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const curso_service_1 = require("./curso.service");
const create_curso_dto_1 = require("./dto/create-curso.dto");
const update_curso_dto_1 = require("./dto/update-curso.dto");
let CursoController = class CursoController {
    constructor(cursoService) {
        this.cursoService = cursoService;
    }
    async create(createCursoDto) {
        return this.cursoService.create(createCursoDto);
    }
    async findAll() {
        return this.cursoService.findAll();
    }
    async findOne(id) {
        return this.cursoService.findOne(id);
    }
    async update(updateCursoDto) {
        return this.cursoService.update(updateCursoDto.id, updateCursoDto);
    }
    async remove(id) {
        return this.cursoService.remove(id);
    }
};
exports.CursoController = CursoController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'post-curso' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_curso_dto_1.CreateCursoDto]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get-curso' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'find-curso' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateCurso'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_curso_dto_1.UpdateCursoDto]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'remove-entity' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "remove", null);
exports.CursoController = CursoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [curso_service_1.CursoService])
], CursoController);
//# sourceMappingURL=curso.controller.js.map