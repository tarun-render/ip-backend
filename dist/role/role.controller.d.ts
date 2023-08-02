import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role-dto';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    getRoles(userId: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Role[]>;
    createRole(userId: string, dto: CreateRoleDto): Promise<import(".prisma/client").Role>;
    updateRole(userId: string, dto: UpdateRoleDto): Promise<import(".prisma/client").Role>;
}
