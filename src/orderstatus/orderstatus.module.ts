import { Module } from '@nestjs/common';
import { OrderstatusController } from './orderstatus.controller';
import { OrderstatusService } from './orderstatus.service';

@Module({
  controllers: [OrderstatusController],
  providers: [OrderstatusService]
})
export class OrderstatusModule {}
