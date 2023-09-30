import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: "",
      useClass: null,
    },
  ],
  exports: [],
})
export class DatabaseModule {}
