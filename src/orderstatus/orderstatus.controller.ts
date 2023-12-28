import { Controller } from '@nestjs/common';
import { CreateOrderStatusDto } from './dto/create-orderstatus.dto';
import { UpdateOrderStatusDto } from './dto/update-orderstatus.dto';
import {
    Body, 
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Put,
    Post,
    UseGuards,
  } from '@nestjs/common';

import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { OrderstatusService } from './orderstatus.service';



@Controller('orderstatus')
export class OrderstatusController {

    constructor( private orderStatusService:OrderstatusService){ 
   
   
    }

@Get('list')
getOrderStatus() {
  return this.orderStatusService.getOrderStatus();
}

@Post()
createOrderStatus( 
@Body() dto: CreateOrderStatusDto ) {
  return this.orderStatusService.createOrderStatus(
     dto
  );
}

@Put()
updateOrderStatus(@Body() dto:UpdateOrderStatusDto) {

    console.log("Updated COde..!!");
    return this.orderStatusService.updateOrderStatus(
    dto
  );
}
   

}
