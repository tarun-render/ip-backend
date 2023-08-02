import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';
import { User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    editUser(userId: string, dto: EditUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
}
