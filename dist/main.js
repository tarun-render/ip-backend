"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("./swagger/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.setGlobalPrefix("api/v1");
    app.enableCors({
        origin: (origin, callback) => {
            callback(null, true);
        },
        allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
        methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
        credentials: true,
    });
    swagger_1.SwaggerModule.setup("api", app, (0, swagger_2.createDocument)(app));
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map