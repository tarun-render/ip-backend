import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, EmailSigninDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }



  @Get('echo')
  echo(@Body() dto: any) {
    return "Hello, Connection Successfull"
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: EmailSigninDto) {
    return this.authService.signin(dto);
  }
}
