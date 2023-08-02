import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsNumber()
    @IsNotEmpty()
    level: number;


    @IsString()
    @IsNotEmpty()
    color: string;
    
  }
  
  