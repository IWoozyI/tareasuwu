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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aspirante = void 0;
const inscripcione_entity_1 = require("../../inscripciones/entities/inscripcione.entity");
const typeorm_1 = require("typeorm");
let Aspirante = class Aspirante {
};
exports.Aspirante = Aspirante;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Aspirante.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Aspirante.prototype, "Nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Aspirante.prototype, "Identificacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscripcione_entity_1.Inscripcion, (inscripcion) => inscripcion.aspirante),
    __metadata("design:type", Array)
], Aspirante.prototype, "inscripciones", void 0);
exports.Aspirante = Aspirante = __decorate([
    (0, typeorm_1.Entity)('Aspirante')
], Aspirante);
//# sourceMappingURL=aspirante.entity.js.map