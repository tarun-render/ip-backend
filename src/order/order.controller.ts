import { Controller, Put } from '@nestjs/common';
import { Body, Get, Patch, Post, UseGuards, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { GetUser } from 'src/auth/decorator';
import { CreateOrderDto } from './dto/create-order';
import { OrderService } from './order.service';
import { JwtGuard } from '../auth/guard';
import { updateOrderDto } from './dto/update-order.dto';


@UseGuards(JwtGuard)
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getOrders(@GetUser('id') userId: string) {
    return this.orderService.getOrders(userId);
  }
  @Get('/all')
  getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Get('/allwithUser')
  getAllOrdersWithUser() {
    return this.orderService.getOrdersWithUserInfo();
  }
  @Get(':id')
  getOrder(@Param('id') orderId: string,
  @GetUser('id') userId: string) {  
   
    return this.orderService.getOrderById(
      userId,
      orderId
    );
  }
 
  @Post('')
  createOrder(@GetUser('id') userId: string, @Body() dto: CreateOrderDto) { 
    return this.orderService.createOrder(userId, dto);
  }

 
  @Put()
  updateeOrder(@GetUser('id') userId: string, @Body() dto: updateOrderDto) { 
    return this.orderService.updateOrder(userId, dto);
  }
}
