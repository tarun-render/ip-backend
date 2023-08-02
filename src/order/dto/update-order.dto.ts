import { CreateOrderDto } from "./create-order";


import {
  IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';

export class updateOrderDto extends CreateOrderDto{



    @IsString()
    @IsNotEmpty()
    id: string;


}