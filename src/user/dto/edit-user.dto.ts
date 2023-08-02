import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString, 
} from 'class-validator';
import { AuthDto } from 'src/auth/dto';

export class EditUserDto extends AuthDto {
  @IsString() 
  id: string;

 
  @IsBoolean() 
  is_active: boolean;
 
  @IsString()
  @IsString()
  role:string;



}
