"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const comentario_module_1 = require("./comentario/comentario.module");
const usuario_module_1 = require("./usuario/usuario.module");
const publicacion_module_1 = require("./publicacion/publicacion.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const path_1 = require("path");
const usuario_gateway_1 = require("./usuario/usuario.gateway");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: 'postgresql://neondb_owner:zX2GMifOxTm0@ep-soft-sea-a5ec13oi.us-east-2.aws.neon.tech/neondb?sslmode=require',
                autoLoadEntities: true,
                synchronize: true,
                ssl: process.env.DB_SSL === "require",
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                subscriptions: {
                    'graphql-ws': true,
                },
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
            comentario_module_1.ComentarioModule,
            usuario_module_1.UsuarioModule,
            publicacion_module_1.PublicacionModule,
            usuario_gateway_1.UsuarioGateway,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map