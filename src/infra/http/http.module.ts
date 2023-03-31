import { Module } from '@nestjs/common';
import { DatabaseModule } from '../prisma/database.module';
import { CreateAdressUseCase } from 'src/application/use-cases/create-adress.use-case';
import { AdressController } from './controllers/address.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AdressController],
  providers: [CreateAdressUseCase],
})
export class HttpModule {}
