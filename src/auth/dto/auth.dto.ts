import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty,ApiPropertyOptional } from '@nestjs/swagger';
export class AuthDto {
  
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({required:true})
  password: string;
 
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;
 
 
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string; 

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  country_code: string; 

  avatar: string;
 

 
  @ApiProperty()
  @IsString()
  @IsOptional()
  address_line1 : string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address_line2  : string;
 
  @ApiProperty()
  @IsString()
  @IsOptional()
  city?          : string;
 
  @ApiProperty()
  @IsString()
  @IsOptional()
  state         : string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  zipcode       : string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  country       : string;

  @ApiProperty()
  @IsString() 
  @IsOptional()
  landmark      : string;
 
  @ApiProperty()
  @IsString()
  @IsOptional()
  geo_location  : string;

}
