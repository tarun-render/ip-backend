import { CreateOrderDto } from './dto/create-order';
import { PrismaService } from '../prisma/prisma.service';
import { Order, Prisma } from '@prisma/client';
import { updateOrderDto } from './dto/update-order.dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    getOrderById(userId: string, orderId: string): Prisma.Prisma__OrderClient<Order, never>;
    createOrder(userId: string, dto: CreateOrderDto): Promise<Order>;
    updateOrder(userId: string, dto: updateOrderDto): Promise<Order>;
    getOrders(userId: string): Prisma.PrismaPromise<Order[]>;
    getOrdersWithUserInfo(): Promise<unknown>;
    getAllOrders(): Prisma.PrismaPromise<unknown>;
}
