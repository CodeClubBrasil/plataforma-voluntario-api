import { UserRepository } from '@application/repositories';
import { Module } from '@nestjs/common';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
      //useClass: InMemoryUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
