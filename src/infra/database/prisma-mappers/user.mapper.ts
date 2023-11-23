import { User } from '@domain/entities';
import { State } from '@domain/enums';
import {
  Users as RawUser,
  AvailableTimes as RawAvailableTimes,
} from '@prisma/client';
import { PrismaAvailableTimeMapper } from './availabe-time.mapper';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      user_name: user.userName,
      telephone: user.telephone,
      email: user.email,
      password: user.password,
      city: user.city,
      state: user.state as State,
      neighborhood: user.neighborhood,
      knowledges: user.knowLedges, //ARRAY
      available_time: user.availableTime, //ARRAY
      active: user.active,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
    };
  }

  static toDomain(raw: RawUser, availableTimes: RawAvailableTimes[]): User {
    return new User({
      id: raw.id,
      name: raw.name,
      lastName: raw.last_name,
      userName: raw.user_name,
      telephone: raw.telephone,
      email: raw.email,
      password: raw.password,
      city: raw.city,
      state: raw.state as State,
      neighborhood: raw.neighborhood,
      knowledges: raw.knowledges, //ARRAY
      availableTime: PrismaAvailableTimeMapper.toDomainList(availableTimes),
      active: raw.active,
      createdAt: raw.created_at,
      updatedAt: raw.updated_at,
    });
  }
}
