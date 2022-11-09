import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authServ: AuthService) {}

  @Post('signup')
  signup() {
    return this.authServ.signup();
  }

  @Post('signin')
  signin() {
    return this.authServ.login();
  }
}
