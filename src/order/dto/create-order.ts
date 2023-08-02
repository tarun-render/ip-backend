import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateOrderDto {




    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsNotEmpty()
    type: string;


    @IsString()
    @IsNotEmpty()
    status: string; 

    @IsString()
    @IsNotEmpty() 
    @IsOptional()
    createdById:string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    statusMessage:string;


    @IsString()
    @IsNotEmpty()
    @IsOptional()
    estimatedDate:Date;


    @IsString()
    @IsNotEmpty()
    @IsOptional()
    requirementDate:Date;

 

  }
