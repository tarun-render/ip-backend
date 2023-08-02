import { CreateOrderDto } from './dto/create-order';
import { OrderService } from './order.service';
import { updateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getOrders(userId: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Order[]>;
    getAllOrders(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Order[]>;
    getOrder(orderId: string, userId: string): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    createOrder(userId: string, dto: CreateOrderDto): Promise<import(".prisma/client").Order>;
    updateeOrder(userId: string, dto: updateOrderDto): Promise<import(".prisma/client").Order>;
}
