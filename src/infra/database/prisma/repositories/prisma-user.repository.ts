import { UserRepository } from '@application/repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@domain/entities';
import { PrismaService } from '../prisma.service';
import {
  PrismaAvailableTimeMapper,
  PrismaUserMapper,
} from '@infra/database/prisma-mappers';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private _prismaService: PrismaService) {}

  async create(data: User): Promise<void> {
    await this._prismaService.users.create({
      data: {
        ...PrismaUserMapper.toPrisma(data),
        available_times: {
          create: PrismaAvailableTimeMapper.toPrismaList(data.availableTime),
        },
      },
    });
  }

  async update(username: string, data: User): Promise<void> {
    await this._prismaService.users.update({
      where: { username: username },
      data: { ...data },
    });
  }

  async findByUsername(username: string): Promise<User> {
    const data = await this._prismaService.users.findFirst({
      where: { username: username },
      include: {
        available_times: true,
      },
    });

    if (!data?.available_times) {
      return null;
    }

    return PrismaUserMapper.toDomain(data, data.available_times);
  }

  sendDocument(data: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
