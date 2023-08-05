import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order';

import { PrismaService } from '../prisma/prisma.service';
import { Order, Prisma } from '@prisma/client';
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
    console.log(order)
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

 async getOrdersWithUserInfo() {
  // NOT IN USE
    const rawSQL = `call ip_portal.sp_get_orders()`;
    return this.prisma.$queryRaw( Prisma.sql`SELECT ipo.*,ipu.first_name,ipu.role,ipu.phone FROM ip_portal.orders ipo
    JOIN ip_portal.users ipu 
  ON ipo.createdById = ipu.id 
  order by createdAt;`);
    // console.log("----- Result -------")
    // console.log(res)
  }

  getAllOrders() {
   // return this.prisma.order.findMany( );
  // const rawSQL = `call ip_portal.sp_get_orders()`;
   return this.prisma.$queryRaw( Prisma.sql`SELECT ipo.*,ipu.first_name,ipu.role,ipu.phone FROM ip_portal.orders ipo
   JOIN ip_portal.users ipu 
 ON ipo.createdById = ipu.id 
 order by createdAt;`);
  }


}
