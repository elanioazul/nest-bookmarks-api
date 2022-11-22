import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import {
  ExtractJwt,
  Strategy
} from 'passport-jwt';

@Injectable()
export class JwsStrategy extends PassportStrategy(
  Strategy,
  'jwt-hhc'
) {
  constructor(private conf: ConfigService) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: conf.get('JWT_SECRET')
    });
  }

  validate(payload: any) {
    return payload;
  }
}
