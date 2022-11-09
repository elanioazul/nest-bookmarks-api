import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(private prismaServ: PrismaService) {}
  signup() {
    return { mesg: 'I have signup' };
  }
  login() {
    return { mesg: 'I have signup' };
  }
}
