import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/todo.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Todo],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    TodoModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}