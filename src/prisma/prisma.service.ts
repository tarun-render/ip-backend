import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: "mysql://admin:Pa55w0rd1!@uidesignrabbit.ccfdgvoqslzp.ap-south-2.rds.amazonaws.com/ip_portal",
        },
      },
    });
  }

  cleanDb() {
    return this.$transaction([
      //this.bookmark.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
