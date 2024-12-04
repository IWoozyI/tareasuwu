"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const rpc_custom_exceptions_filter_1 = require("./common/exceptions/rpc-custom-exceptions.filter");
const common_1 = require("@nestjs/common");
const config_1 = require("./config");
async function bootstrap() {
    const logger = new common_1.Logger('Gateway');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
    }));
    app.useGlobalFilters(new rpc_custom_exceptions_filter_1.RpcCustomExceptionFilter);
    await app.listen(config_1.envs.PORT);
    logger.log('El gateway esta bien');
}
bootstrap();
//# sourceMappingURL=main.js.map