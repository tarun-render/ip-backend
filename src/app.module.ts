import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';  
import { OrderModule } from './order/order.module';
import { RoleModule } from './role/role.module';
import { OrderstatusModule } from './orderstatus/orderstatus.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    OrderModule,
    RoleModule,
    OrderstatusModule,
  ],
  controllers: [ ],
})
export class AppModule {}
