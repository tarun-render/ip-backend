import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Put,
    Post,
    UseGuards,
  } from '@nestjs/common';

  import { JwtGuard } from '../auth/guard';
  import { GetUser } from '../auth/decorator';
import { RoleService } from './role.service'; 
import { CreateRoleDto } from './dto/create-role.dto';
import { updateOrderDto } from 'src/order/dto/update-order.dto';
import { UpdateRoleDto } from './dto/update-role-dto';


@UseGuards(JwtGuard)
@Controller('role')
export class RoleController {

constructor( private roleService:RoleService){ 
}


@Get('list')
getRoles(@GetUser('id') userId: string) {
  return this.roleService.getRoles(
    userId,
  );
}

@Post()
createRole(@GetUser('id') userId: string , 
@Body() dto: CreateRoleDto ) {
  return this.roleService.createRole(
    userId,dto
  );
}

@Put()
updateRole(@GetUser('id') userId: string,@Body() dto: UpdateRoleDto) {
  return this.roleService.updateRole(
    userId,dto
  );
}
}
