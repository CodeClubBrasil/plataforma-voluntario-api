import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaAdressRepository } from './repositories/prisma-address-repository';
import { AdressRepository } from 'src/application/repositories/address.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: AdressRepository,
      useClass: PrismaAdressRepository,
    },
  ],
  exports: [AdressRepository],
})
export class DatabaseModule {}
