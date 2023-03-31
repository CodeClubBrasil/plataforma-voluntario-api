import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaAddressRepository } from './repositories/prisma-address-repository';
import { AddressRepository } from 'src/application/repositories/address.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository,
    },
  ],
  exports: [AddressRepository],
})
export class DatabaseModule {}
