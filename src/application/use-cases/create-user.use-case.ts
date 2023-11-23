import { AvailableTimeDto } from '@application/dtos';
import { UserRepository } from '@application/repositories';
import { AvailableTime, AvailableTimeData, User } from '@domain/entities';
import { State, Weekday } from '@domain/enums';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: UserRequest): Promise<UserResponse> {
    const availableTimeDtos = request.available_time;
    const availableTimes: AvailableTime[] = availableTimeDtos.map(dtoToData);

    const UserOutput = new User({
      name: request.name,
      lastName: request.last_name,
      userName: request.user_name,
      telephone: request.telephone,
      email: request.email,
      password: request.password,
      city: request.city,
      state: request.state as State,
      neighborhood: request.neighborhood,
      knowledges: request.knowledges,
      active: true,
      createdAt: new Date(),
      updatedAt: null,
      availableTime: availableTimes,
    });

    await this.userRepository.create(UserOutput);

    return { UserOutput };
  }
}

function dtoToData(dto: AvailableTimeDto): AvailableTime {
  const availableTimeData: AvailableTimeData = {
    weekDay: dto.week_day as Weekday,
    timeStart: dto.time_start,
    timeEnd: dto.time_end,
    active: dto.active,
    createdAt: dto.created_at,
    updatedAt: null,
    userId: dto.user_id,
  };

  return new AvailableTime(availableTimeData);
}

interface UserRequest {
  name: string;
  last_name: string;
  user_name: string;
  telephone: string[];
  email: string;
  password: string;
  city: string;
  state: string;
  neighborhood: string;
  knowledges: string[];
  available_time: AvailableTimeDto[];
}

interface UserResponse {
  UserOutput: User;
}
