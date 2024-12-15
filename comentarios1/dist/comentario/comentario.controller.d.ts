import { Response } from 'express';
import { ComentarioService } from './comentario.service';
export declare class ComentarioController {
    private readonly comentarioService;
    constructor(comentarioService: ComentarioService);
    downloadPDF(res: Response): Promise<void>;
}
