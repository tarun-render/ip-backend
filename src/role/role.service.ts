import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role-dto';
@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  getRoles(userId: string) {
    return this.prisma.role.findMany({
      where:{
        isActive:true
      }
    });
  }
  async createRole(userId: string, dto: CreateRoleDto) { 

    const role = await this.prisma.role.create({
      data: { 
       ...dto
      },
    });

    return role;
  }

  async updateRole(userId: string, dto: UpdateRoleDto) { 

    const role = await this.prisma.role.update({
      where:{
        id:dto.id
      },
      data: { 
       ...dto
      },
    });

    return role;
  }
}
