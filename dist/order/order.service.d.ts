import { CreateOrderDto } from './dto/create-order';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';
import { updateOrderDto } from './dto/update-order.dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    getOrderById(userId: string, orderId: string): import(".prisma/client").Prisma.Prisma__OrderClient<Order, never>;
    createOrder(userId: string, dto: CreateOrderDto): Promise<Order>;
    updateOrder(userId: string, dto: updateOrderDto): Promise<Order>;
    getOrders(userId: string): import(".prisma/client").Prisma.PrismaPromise<Order[]>;
    getAllOrders(): import(".prisma/client").Prisma.PrismaPromise<Order[]>;
}
