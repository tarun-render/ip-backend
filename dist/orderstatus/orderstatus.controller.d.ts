import { CreateOrderStatusDto } from './dto/create-orderstatus.dto';
import { UpdateOrderStatusDto } from './dto/update-orderstatus.dto';
import { OrderstatusService } from './orderstatus.service';
export declare class OrderstatusController {
    private orderStatusService;
    constructor(orderStatusService: OrderstatusService);
    getOrderStatus(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").OrderStatus[]>;
    createOrderStatus(dto: CreateOrderStatusDto): Promise<import(".prisma/client").OrderStatus>;
    updateOrderStatus(dto: UpdateOrderStatusDto): Promise<import(".prisma/client").OrderStatus>;
}
