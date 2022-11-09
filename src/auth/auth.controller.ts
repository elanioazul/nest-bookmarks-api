import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authServ: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authServ.signup();
  }

  @Post('signin')
  signin() {
    return this.authServ.login();
  }
}
