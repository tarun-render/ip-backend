import {
  IsBoolean,
    IsNotEmpty, 
    IsNumber,
    IsString,
  } from 'class-validator';
import { CreateOrderStatusDto } from './create-orderstatus.dto';
  
  export class UpdateOrderStatusDto extends CreateOrderStatusDto {
 

    @IsString()
    @IsNotEmpty()
    id: string;
   

    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;
  }
