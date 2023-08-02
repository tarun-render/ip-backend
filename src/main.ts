import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.setGlobalPrefix("api/v1");

  app.enableCors({
    origin: (origin, callback) => {
      callback(null, true);
      /*if (whitelist.indexOf(origin) !== -1) {
        console.log("allowed cors for:", origin);
        callback(null, true)
      } else {
        console.log("blocked cors for:", origin);
        callback(new Error('Not allowed by CORS'))
      }*/
    },
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
    // allowedHeaders: '*',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    // methods: '*',
    credentials: true,
  });

SwaggerModule.setup("api",app,createDocument(app))
  await app.listen(3333);
}
bootstrap();
