"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpracticaService = void 0;
const common_1 = require("@nestjs/common");
const rpractica = [
    {
        id: 1,
        name: 'Pedro',
        email: 'a'
    },
    {
        id: 2,
        name: 'Julio',
        email: 'b'
    }
];
let RpracticaService = class RpracticaService {
    create(createRpracticaDto) {
        return 'This action adds a new rpractica';
    }
    findAll() {
        return rpractica;
    }
    findOne(id) {
        return `This action returns a #${id} rpractica`;
    }
    update(id, updateRpracticaDto) {
        return `This action updates a #${id} rpractica`;
    }
    remove(id) {
        return `This action removes a #${id} rpractica`;
    }
};
exports.RpracticaService = RpracticaService;
exports.RpracticaService = RpracticaService = __decorate([
    (0, common_1.Injectable)()
], RpracticaService);
//# sourceMappingURL=rpractica.service.js.map