"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Presupuestos')
        .setDescription('Microservicio de presupuestos')
        .setVersion('1.0')
        .addTag('Works')
        .addTag('Budgets')
        .addTag('Clients')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map