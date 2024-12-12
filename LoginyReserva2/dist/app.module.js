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
const cliente_module_1 = require("./cliente/cliente.module");
const paquete_module_1 = require("./paquete/paquete.module");
const reserva_module_1 = require("./reserva/reserva.module");
const rol_module_1 = require("./rol/rol.module");
const usuario_module_1 = require("./usuario/usuario.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                autoLoadEntities: true,
                synchronize: true,
                ssl: process.env.DB_SSL === "require",
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                subscriptions: {
                    'graphql-ws': true
                },
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
            cliente_module_1.ClienteModule, paquete_module_1.PaqueteModule, reserva_module_1.ReservaModule, rol_module_1.RolModule, usuario_module_1.UsuarioModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map