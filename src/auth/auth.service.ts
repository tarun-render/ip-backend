import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto, EmailSigninDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    const {
      email,
      password,
      first_name,
      phone,
      country_code,
      avatar,
      address_line1,
      address_line2,
      city,
      state,
      country,
      zipcode,
      landmark,
      geo_location,
    } = dto;

    // generate the password hash
    const hash = await argon.hash(password);

    // save the new user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          email ,
          password: hash, 
          is_active:true,
          first_name,
          phone,
          country_code,
          avatar,
          address_line1,
          address_line2,
          city,
          state,
          country,
          zipcode,
          landmark,
          geo_location,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: EmailSigninDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon.verify(user.password, dto.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      id: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn:"10h",
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
