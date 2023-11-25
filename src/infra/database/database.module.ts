import { UserRepository } from '@application/repositories';
import { Module } from '@nestjs/common';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';
import { PrismaService } from './prisma/prisma.service';
import { InMemoryUserRepository } from './in-memory/repositories/in-memory.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaService,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
