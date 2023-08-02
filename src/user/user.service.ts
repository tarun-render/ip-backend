import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: string, dto: EditUserDto) {
    console.log(dto);
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    delete user.password;

    return user;
  }

  async getUsers(): Promise<User[]> {
    try {
      const users = await this.prisma.user.findMany({
        where: {
          is_active: true,
        },
      });

      return users;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
 
}
