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
exports.ComentarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comentario_entity_1 = require("./entities/comentario.entity");
const typeorm_2 = require("typeorm");
const PDFDocument = require("pdfkit");
let ComentarioService = class ComentarioService {
    constructor(comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }
    async generatePDFBuffer() {
        const comentarios = await this.comentarioRepository.find({
            relations: ['usuario', 'publicacion'],
        });
        const doc = new PDFDocument();
        const buffers = [];
        doc.on('data', (chunk) => buffers.push(chunk));
        doc.on('end', () => { });
        doc.fontSize(14).text('Reporte de Comentarios', { align: 'center' });
        doc.moveDown();
        comentarios.forEach((comentario, index) => {
            doc
                .fontSize(12)
                .text(`${index + 1}. ${comentario.contenido}`, { align: 'left' })
                .text(`Fecha: ${comentario.fechayhora}`, { align: 'left' })
                .text(`Usuario: ${comentario.usuario.nombre}`, { align: 'left' })
                .text(`Publicación: ${comentario.publicacion.titulo}`, { align: 'left' })
                .moveDown();
        });
        doc.end();
        return new Promise((resolve) => {
            doc.on('end', () => resolve(Buffer.concat(buffers)));
        });
    }
    async create(createComentarioInput) {
        const nuevo = this.comentarioRepository.create(createComentarioInput);
        return await this.comentarioRepository.save(nuevo);
    }
    async findAll() {
        return await this.comentarioRepository.find({
            relations: ['usuario', 'publicacion']
        });
    }
    async findOne(id) {
        return await this.comentarioRepository.findOne({ where: { id }, relations: ['usuario', 'publicacion'] });
    }
    async update(id, updateComentarioInput) {
        const actualizar = await this.comentarioRepository.preload(updateComentarioInput);
        if (!actualizar) {
            throw new Error("Usuario no encontrado");
        }
        return await this.comentarioRepository.save(actualizar);
    }
    async remove(id) {
        const borrar = await this.comentarioRepository.findOne({ where: { id } });
        if (!borrar) {
            throw new Error("Usuario no encontrado");
        }
        await this.comentarioRepository.remove(borrar);
        return { ...borrar, id };
    }
};
exports.ComentarioService = ComentarioService;
exports.ComentarioService = ComentarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comentario_entity_1.Comentario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ComentarioService);
//# sourceMappingURL=comentario.service.js.map