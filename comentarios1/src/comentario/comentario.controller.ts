import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ComentarioService } from './comentario.service';

@Controller('comentarios') // Ruta base: /comentarios
export class ComentarioController {
  constructor(private readonly comentarioService: ComentarioService) {}

  @Get('pdf') // Ruta completa: /comentarios/pdf
  async downloadPDF(@Res() res: Response) {
    const pdfBuffer = await this.comentarioService.generatePDFBuffer();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="comentarios.pdf"', // Forzar descarga
      'Content-Length': pdfBuffer.length,
    });

    res.send(pdfBuffer);
  }
}

