import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Authorization } from './authorization.model';

@Module({
  controllers: [AuthorizationController],
  providers: [AuthorizationService],
  imports: [
    SequelizeModule.forFeature([Authorization])
  ]
})
export class AuthorizationModule {}
