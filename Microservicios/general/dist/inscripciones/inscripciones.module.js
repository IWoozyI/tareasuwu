"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionesModule = void 0;
const common_1 = require("@nestjs/common");
const inscripciones_service_1 = require("./inscripciones.service");
const inscripciones_controller_1 = require("./inscripciones.controller");
const typeorm_1 = require("@nestjs/typeorm");
const curso_entity_1 = require("../curso/entities/curso.entity");
const aspirante_entity_1 = require("../aspirante/entities/aspirante.entity");
const inscripcione_entity_1 = require("./entities/inscripcione.entity");
let InscripcionesModule = class InscripcionesModule {
};
exports.InscripcionesModule = InscripcionesModule;
exports.InscripcionesModule = InscripcionesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([curso_entity_1.Curso, aspirante_entity_1.Aspirante, inscripcione_entity_1.Inscripcion]),
        ],
        controllers: [inscripciones_controller_1.InscripcionesController],
        providers: [inscripciones_service_1.InscripcionesService],
        exports: [typeorm_1.TypeOrmModule],
    })
], InscripcionesModule);
//# sourceMappingURL=inscripciones.module.js.map