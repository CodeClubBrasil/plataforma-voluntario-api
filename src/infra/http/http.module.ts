import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import {
  CreateUserUseCase,
  GetByUsernameUseCase,
  UpdateUserUseCase,
} from '@application/use-cases';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserUseCase, GetByUsernameUseCase, UpdateUserUseCase],
})
export class HttpModule {}
