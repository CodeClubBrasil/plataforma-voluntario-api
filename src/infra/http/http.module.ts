import { Module } from '@nestjs/common';
import { DatabaseModule } from '../prisma/database.module';
import { AddressController } from './controllers/address.controller';
import {
  CreateAddressUseCase,
  DeleteAddressUseCase,
  FindByIdAddressUseCase,
  GetAddressUseCase,
  UpdateAddressUseCase,
} from 'src/application/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [
    CreateAddressUseCase,
    GetAddressUseCase,
    FindByIdAddressUseCase,
    UpdateAddressUseCase,
    DeleteAddressUseCase,
  ],
})
export class HttpModule {}
