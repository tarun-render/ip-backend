import { CreateRoleDto } from "./create-role.dto";
import {
  IsBoolean,
    IsNotEmpty, 
    IsString,
  } from 'class-validator';

export class UpdateRoleDto extends CreateRoleDto {

    @IsString()
    @IsNotEmpty()
    id: string;


    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;


    @IsBoolean()
    @IsNotEmpty()
    canAdmin: boolean;

    @IsBoolean()
    @IsNotEmpty()
    canReview: boolean;
}