import { AuthDto } from 'src/auth/dto';
export declare class EditUserDto extends AuthDto {
    id: string;
    is_active: boolean;
    role: string;
}
