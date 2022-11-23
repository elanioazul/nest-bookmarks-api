import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Post
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authServ: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signup(
    @Body()
    dto: AuthDto
  ) {
    return this.authServ.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(
    @Body()
    dto: AuthDto
  ) {
    return this.authServ.login(dto);
  }
}
