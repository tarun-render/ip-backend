import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order';

import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';
import { updateOrderDto } from './dto/update-order.dto';



@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}



  getOrderById(
    userId: string,
    orderId: string,
  ) {
    return this.prisma.order.findFirst({
      where: {
        id: orderId,
         createdById: userId,
      },
    });
  }

  async createOrder(userId: string, dto: CreateOrderDto) {

   const {title,type,status,statusMessage,description,estimatedDate,requirementDate} = dto
    
    const order = this.prisma.order.create({
      data: {         
        title, 
        description,        
        type,   
        status,    
        statusMessage,   
        estimatedDate :estimatedDate ? new Date(estimatedDate) : new Date(), 
        createdById:userId,      
        requirementDate:requirementDate ? new Date(requirementDate) :  new Date()
      },
    });
    return order;
  }
  async updateOrder(userId: string, dto: updateOrderDto) {

    const {title,type,status,statusMessage,description,estimatedDate,requirementDate} = dto
     
     const order = this.prisma.order.update({
      where:{
        id:dto.id
      },
       data: {         
         title, 
         description,        
         type,   
         status,    
         statusMessage,   
         estimatedDate :estimatedDate ? new Date(estimatedDate) : new Date(), 
         createdById:userId,      
         requirementDate:requirementDate ? new Date(requirementDate) :  new Date()
       },
     });
     return order;
   }


  getOrders(userId: string) {
    return this.prisma.order.findMany({
      where: {
        createdById:userId
      },
    });
  }

   
  getAllOrders() {
    return this.prisma.order.findMany( );
  }


}
