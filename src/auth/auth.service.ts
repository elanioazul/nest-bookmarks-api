import {
  ForbiddenException,
  Injectable
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
@Injectable()
export class AuthService {
  constructor(
    private prismaServ: PrismaService
  ) {}
  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    // save the new user in the db
    try {
      const user =
        await this.prismaServ.user.create({
          data: {
            email: dto.email,
            hash
          }
        });
      // return the saved user
      delete user.hash;
      return user;
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credentials taken'
          );
        }
      }
      throw error;
    }
  }

  async login(dto: AuthDto) {
    // find the user by email
    const user =
      await this.prismaServ.user.findUnique({
        where: {
          email: dto.email
        }
      });
    // if user does not exist throw exception
    if (!user)
      throw new ForbiddenException(
        'Credential incorrect'
      );
    // compare password
    const paswMatches = await argon.verify(
      user.hash,
      dto.password
    );
    // if password incorrect throw exception
    if (!paswMatches)
      throw new ForbiddenException(
        'Credential incorrect'
      );
    //if everything goes well we send back the user
    // return the saved user with no hash (safer)
    delete user.hash;
    return user;
  }
}
