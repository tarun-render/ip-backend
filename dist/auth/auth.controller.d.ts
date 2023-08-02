import { AuthService } from './auth.service';
import { AuthDto, EmailSigninDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    echo(dto: any): string;
    signin(dto: EmailSigninDto): Promise<{
        access_token: string;
    }>;
}
