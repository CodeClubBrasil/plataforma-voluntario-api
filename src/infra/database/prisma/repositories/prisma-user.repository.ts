import { UserRepository } from '@application/repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@domain/entities';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  sendDocument(data: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(username: string, data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByUsername(username: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
