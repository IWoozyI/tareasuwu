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
exports.Inscripcion = void 0;
const aspirante_entity_1 = require("../../aspirante/entities/aspirante.entity");
const curso_entity_1 = require("../../curso/entities/curso.entity");
const typeorm_1 = require("typeorm");
let Inscripcion = class Inscripcion {
};
exports.Inscripcion = Inscripcion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inscripcion.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inscripcion.prototype, "ID_Curso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_entity_1.Curso, (curso) => curso.inscripciones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_Curso' }),
    __metadata("design:type", curso_entity_1.Curso)
], Inscripcion.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inscripcion.prototype, "ID_Aspirante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => aspirante_entity_1.Aspirante, (aspirante) => aspirante.inscripciones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_Aspirante' }),
    __metadata("design:type", aspirante_entity_1.Aspirante)
], Inscripcion.prototype, "aspirante", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inscripcion.prototype, "Fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inscripcion.prototype, "Hora", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inscripcion.prototype, "Valor_cancelado", void 0);
exports.Inscripcion = Inscripcion = __decorate([
    (0, typeorm_1.Entity)('Inscripcion')
], Inscripcion);
//# sourceMappingURL=inscripcione.entity.js.map