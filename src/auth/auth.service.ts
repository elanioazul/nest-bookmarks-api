import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
@Injectable()
export class AuthService {
  signup() {
    return { mesg: 'I have signup' };
  }
  login() {
    return { mesg: 'I have signup' };
  }
}
