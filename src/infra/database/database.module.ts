import { UserRepository } from '@application/repositories';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';
import { InMemoryUserRepository } from './in-memory/repositories/in-memory.repository';

@Module({
  providers: [
    //PrismaService,
    {
      provide: UserRepository,
      //useClass: PrismaUserRepository,
      useClass: InMemoryUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
