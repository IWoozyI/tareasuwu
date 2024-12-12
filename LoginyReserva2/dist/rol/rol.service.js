"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolService = void 0;
const common_1 = require("@nestjs/common");
let RolService = class RolService {
    create(createRolInput) {
        return 'This action adds a new rol';
    }
    findAll() {
        return `This action returns all rol`;
    }
    findOne(id) {
        return `This action returns a #${id} rol`;
    }
    update(id, updateRolInput) {
        return `This action updates a #${id} rol`;
    }
    remove(id) {
        return `This action removes a #${id} rol`;
    }
};
exports.RolService = RolService;
exports.RolService = RolService = __decorate([
    (0, common_1.Injectable)()
], RolService);
//# sourceMappingURL=rol.service.js.map