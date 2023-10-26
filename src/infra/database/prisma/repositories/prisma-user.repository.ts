import { UserRepository } from '@application/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@domain/entities';

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
