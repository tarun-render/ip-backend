import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderStatusDto } from './dto/create-orderstatus.dto';
import { UpdateOrderStatusDto } from './dto/update-orderstatus.dto';
export declare class OrderstatusService {
    private prisma;
    constructor(prisma: PrismaService);
    getOrderStatus(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").OrderStatus[]>;
    createOrderStatus(dto: CreateOrderStatusDto): Promise<import(".prisma/client").OrderStatus>;
    updateOrderStatus(dto: UpdateOrderStatusDto): Promise<import(".prisma/client").OrderStatus>;
}
