import {
    IsEmail,
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    MinLength,
  } from 'class-validator';
  
  export class EmailSigninDto {
    
    @IsEmail()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
    
  
  }
  