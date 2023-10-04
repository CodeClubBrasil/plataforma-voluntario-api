import { DatabaseModule } from '@infra/prisma/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import {
  CreateUserUseCase,
  GetByUsernameUseCase,
  UpdateUserUseCase,
} from '@application/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserUseCase, GetByUsernameUseCase, UpdateUserUseCase],
})
export class HttpModule {}
