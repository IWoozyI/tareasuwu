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
exports.ComentarioController = void 0;
const common_1 = require("@nestjs/common");
const comentario_service_1 = require("./comentario.service");
let ComentarioController = class ComentarioController {
    constructor(comentarioService) {
        this.comentarioService = comentarioService;
    }
    async downloadPDF(res) {
        const pdfBuffer = await this.comentarioService.generatePDFBuffer();
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="comentarios.pdf"',
            'Content-Length': pdfBuffer.length,
        });
        res.send(pdfBuffer);
    }
};
exports.ComentarioController = ComentarioController;
__decorate([
    (0, common_1.Get)('pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "downloadPDF", null);
exports.ComentarioController = ComentarioController = __decorate([
    (0, common_1.Controller)('comentarios'),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioController);
//# sourceMappingURL=comentario.controller.js.map