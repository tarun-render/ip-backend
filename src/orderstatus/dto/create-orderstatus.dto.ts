import {
    IsNotEmpty, 
    IsNumber,
    IsString,
  } from 'class-validator';
  
  export class CreateOrderStatusDto {
 

    @IsString()
    @IsNotEmpty()
    name: string;
  
    
    @IsString()
    @IsNotEmpty()
    statusMsg: string;

    @IsNumber()
    @IsNotEmpty()
    level: number;
  
    @IsString()
    @IsNotEmpty()
    roleId: string;
 

  }
