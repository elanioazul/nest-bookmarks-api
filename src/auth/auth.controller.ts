import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authServ: AuthService) {}

  @Post('signup')
  signup(@Body() dto: any) {
    console.log({
      dto,
    });
    return this.authServ.signup();
  }

  @Post('signin')
  signin() {
    return this.authServ.login();
  }
}
