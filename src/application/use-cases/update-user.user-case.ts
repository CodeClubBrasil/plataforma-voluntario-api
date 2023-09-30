import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { User } from '@domain/entities';
import { State } from '@domain/enums';

interface UpdateUserRequest {
  last_name: string;
  password: string;
  city: string;
  name: string;
  state: string;
  neighborhood: string;
  telephone: string[];
  email: string;
  active: boolean;
}

interface UpdateUserResponse {
  UserOutput: User;
}

@Injectable()
export class UpdateUserUseCase {
  constructor(private userRepostiory: UserRepository) {}

  async execute(
    username: string,
    data: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    const UserOutput = await this.userRepostiory.findByUsername(username);

    if (!UserOutput)
      throw new Error(`Not found user with username ${username}`);

    UserOutput.lastName = data.last_name;
    UserOutput.password = data.password;
    UserOutput.city = data.city;
    UserOutput.name = data.name;
    UserOutput.state = data.state as State;
    UserOutput.neighborhood = data.neighborhood
    UserOutput.active = data.active;
    UserOutput.telephone = data.telephone;
    UserOutput.email = data.email;
    UserOutput.updatedAt = new Date();

    await this.userRepostiory.update(username, data);

    return { UserOutput };
  }
}
