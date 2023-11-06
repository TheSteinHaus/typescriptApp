import { Controller, Get, Post } from '@nestjs/common';
import { AuthorizationService } from 'src/service/authorization.service';

@Controller()
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Post()
  getHello(data): string {
    return this.authorizationService.editText(data);
  }
}