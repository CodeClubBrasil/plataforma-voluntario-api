import { Module } from '@nestjs/common';
import { DatabaseModule } from '../prisma/database.module';
import { AdressController } from './controllers/address.controller';
import { CreateAddressUseCase } from 'src/application/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [AdressController],
  providers: [CreateAddressUseCase],
})
export class HttpModule {}
