import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { CreateParqueosDto } from './dto/parqueos.dto';


const parqueos= [
    {
      id:1,
      descripcion:"carro azul",
      vehiculo:1,
      marca:"cadilac",
    },
    {
      id:2,
      descripcion:"camioneta blanca",
      vehiculo:23,
      marca:"ford",
    },
    {
      id:3,
      descripcion:"auto viejo",
      vehiculo:17,
      marca:"suzuki",
    }
  ]

interface Usuario{
    id:string;
    nombre:string;
    isActive: boolean;
}

interface Conectados{
    [id:string]:{
        socket:Socket;
        usuario:Usuario;
    }
}

const usuarios:Usuario[]=[
    {id:'1',nombre:'Anna',isActive: true},
    {id:'2',nombre:'Yusmeli',isActive: true},
    {id:'3',nombre:'Keyra',isActive: true},
    {id:'4',nombre:'Giselle',isActive: false}
];

@Injectable()
export class UsuarioService {
    private conectados:Conectados={};

    create(crearParqueos: CreateParqueosDto ) {
        parqueos.push(crearParqueos);
        return crearParqueos;
    }

    registrarUsuario(socket:Socket, userId:string){
        const usuario=usuarios.find(u=>u.id===userId);
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        if (!usuario.isActive) {
            throw new Error('Usuario no activo');
        }

        this.checkConecUser(usuario);

        this.conectados[socket.id]={
            socket:socket,
            usuario:usuario,
        };
    }

    borrarUsuario(usuarioId:string){
        delete this.conectados[usuarioId];
    }

    getUsuarios(): Usuario[] {
        return Object.values(this.conectados).map(cliente => cliente.usuario);
    }
    

    getNombreUsuario(socketId:string):string{
        return this.conectados[socketId].usuario.nombre;
    }

    checkConecUser(usuario:Usuario){
        const conexionesUsuario = Object.keys(this.conectados).filter(
            (socketId) => this.conectados[socketId].usuario.id === usuario.id,
        );
        if (conexionesUsuario.length >= 3) {
            const socketIdAntiguo = conexionesUsuario[0];
            this.conectados[socketIdAntiguo].socket.disconnect();
            delete this.conectados[socketIdAntiguo];
    }
    }
}

