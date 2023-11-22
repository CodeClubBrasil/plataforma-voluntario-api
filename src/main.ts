import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('plataforma-voluntario-api')
    .setDescription('Plataforma voluntário api')
    .setVersion('4.0.0')
    .setContact(
      'Code Club Brasil (Victor Hugo)',
      'https://www.codeclubbrasil.org.br/',
      'contato@codeclubbrasil.org.br',
    )
    .setLicense(
      'Copyright (c) 2023, Code Club Brasil, Todos os direitos reservados.',
      'https://www.codeclubbrasil.org.br/',
    )
    .setExternalDoc('Open Api: swagger-ui-json', '/swagger-ui-json')
    .build();

  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger-ui', app, document);

  app.enableCors();
  await app.listen(8080, () => {
    console.log('Server is listening on http://localhost:8080/swagger-ui');
  });
}

bootstrap();
