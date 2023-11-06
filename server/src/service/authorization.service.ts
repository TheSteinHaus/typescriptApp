import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizationService {
  editText(text): string {
    return text + "11111";
  }
}