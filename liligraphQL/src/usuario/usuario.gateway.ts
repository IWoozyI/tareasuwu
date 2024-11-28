import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { UsuarioService } from './usuario.service';
import { Server, Socket } from 'socket.io';
import { CreateParqueosDto } from './dto/parqueos.dto';

@WebSocketGateway({cors:true})
export class UsuarioGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer()
  wss:Server;

  constructor(private readonly usuarioService: UsuarioService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token= client.handshake.headers.authentication as string;
    try {
      await this.usuarioService.registrarUsuario(client, token);  
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('usuariosConectados', this.usuarioService.getUsuarios());
  }
  handleDisconnect(client: Socket) {
    this.usuarioService.borrarUsuario(client.id);
    this.wss.emit('usuariosConectados', this.usuarioService.getUsuarios());
  }

  @SubscribeMessage('agregar-transaccion')
  MensajeCliente(cliente:Socket, parqueos:CreateParqueosDto){
    const crear= this.usuarioService.create(parqueos);
    this.wss.emit('Server',{
      NombreUsuario: this.usuarioService.getNombreUsuario(cliente.id),
      message: parqueos
    });
  }

  @SubscribeMessage('consultar-activos')
  consultarActivos(cliente: Socket) {
    const usuariosConectados = this.usuarioService.getUsuarios();
    cliente.emit('activos', usuariosConectados);
  }
}
