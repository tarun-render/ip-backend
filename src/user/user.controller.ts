import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

 @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
 
  @Post()
  editUser( 
    @Body() dto: EditUserDto,
  ) {
    
    return this.userService.editUser(dto.id, dto);
  }


  @Get('list')
  getUsers() { 
    return this.userService.getUsers();
  }
}
