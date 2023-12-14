import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { User, UserValidator } from '@domain/entities';
import { State } from '@domain/enums';
import { ApplicationNotFoundException } from '@application/exceptions';

interface UpdateUserRequest {
  last_name: string;
  password: string;
  city: string;
  name: string;
  state: State;
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

    ApplicationNotFoundException.When(
      !UserOutput,
      `Not found user with username: ${username}`,
    );

    UserValidator.validateName(data.name);
    UserValidator.validateName(data.last_name);
    UserValidator.validateTelephone(data.telephone);
    UserValidator.validateEmail(data.email);
    UserValidator.validatePassword(data.password);
    UserValidator.validateCity(data.city);
    UserValidator.validateState(data.state);
    UserValidator.validateNeighborhood(data.neighborhood);

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

    const updatedUserOutput = await this.userRepostiory.findByUsername(
      username,
    );

    return { UserOutput: updatedUserOutput };
  }
}
