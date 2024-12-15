import { Module } from '@nestjs/common';
import { ComentarioModule } from './comentario/comentario.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { UsuarioGateway } from './usuario/usuario.gateway'; 
import { ComentarioController } from './comentario/comentario.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://neondb_owner:zX2GMifOxTm0@ep-soft-sea-a5ec13oi.us-east-2.aws.neon.tech/neondb?sslmode=require',
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.DB_SSL === "require",
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false, // desactiva playground si no lo necesitas
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      subscriptions: {
        'graphql-ws': true, // habilita las suscripciones
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ComentarioModule, 
    UsuarioModule, 
    PublicacionModule,
    UsuarioGateway, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
