import { NestFactory } from '@nestjs/core';
import { AuthorizationModule } from './modules/authorization.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthorizationModule, {
    cors:true
  });
  await app.listen(3000);
}
bootstrap();
