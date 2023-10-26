import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { User } from '@domain/entities';

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

  async execute(username: string, data: UpdateUserRequest): Promise<User> {
    const UserOutput = await this.userRepostiory.findByUsername(username);

    if (!UserOutput)
      throw new Error(`Not found user with username ${username}`);

    UserOutput.name;
    UserOutput.lastName;
    UserOutput.password;
    UserOutput.city;
    UserOutput.state;
    UserOutput.neighborhood;
    UserOutput.active;
    UserOutput.telephone;
    UserOutput.email;
    UserOutput.updatedAt = new Date();

    await this.userRepostiory.update(username, data);

    return UserOutput;
  }
}
