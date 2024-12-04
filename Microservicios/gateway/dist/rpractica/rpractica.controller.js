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
const create_rpractica_dto_1 = require("./dto/create-rpractica.dto");
const update_rpractica_dto_1 = require("./dto/update-rpractica.dto");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const config_1 = require("../config");
let RpracticaController = class RpracticaController {
    constructor(client) {
        this.client = client;
    }
    create(createRpracticaDto) {
        return this.client.send({ cmd: 'post-rpractica' }, createRpracticaDto);
    }
    async findAll() {
        return this.client.send({ cmd: 'get-rpractica' }, {}).pipe((0, rxjs_1.catchError)((error) => {
            throw new microservices_1.RpcException(error);
        }));
    }
    findOne(id) {
    }
    update(id, updateRpracticaDto) {
    }
    remove(id) {
    }
};
exports.RpracticaController = RpracticaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rpractica_dto_1.CreateRpracticaDto]),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RpracticaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rpractica_dto_1.UpdateRpracticaDto]),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RpracticaController.prototype, "remove", null);
exports.RpracticaController = RpracticaController = __decorate([
    (0, common_1.Controller)('rpractica'),
    __param(0, (0, common_1.Inject)(config_1.NATS_SERVICE)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], RpracticaController);
//# sourceMappingURL=rpractica.controller.js.map