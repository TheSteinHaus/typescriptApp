import { Module } from '@nestjs/common';
import { AuthorizationController } from '../controllers/authorization.controller';
import { AuthorizationService } from '../service/authorization.service';

@Module({
  imports: [],
  controllers: [AuthorizationController],
  providers: [AuthorizationService],
})
export class AuthorizationModule {}
