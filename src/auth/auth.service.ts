import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { mesg: 'I have signup' };
  }
  login() {
    return { mesg: 'I have signup' };
  }
}
