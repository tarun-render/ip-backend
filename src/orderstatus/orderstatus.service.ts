import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderStatusDto } from './dto/create-orderstatus.dto';
import { UpdateOrderStatusDto } from './dto/update-orderstatus.dto';

@Injectable()
export class OrderstatusService {


    constructor(private prisma: PrismaService) {
      
    }

      getOrderStatus() {
        return this.prisma.orderStatus.findMany({
          where:{
            isActive:true
          }
        });
      }

      async createOrderStatus( dto: CreateOrderStatusDto) { 
console.log(dto)
        const orderStatus = await this.prisma.orderStatus.create({
          data: { 
           ...dto
          },
        });
    
        return orderStatus;
      }

      async updateOrderStatus( dto: UpdateOrderStatusDto) { 

        const orderStatus = await this.prisma.orderStatus.update({   where:{
            id:dto.id
          },
          data: { 
           ...dto
          },
        });
    
        return orderStatus;
      }
}
