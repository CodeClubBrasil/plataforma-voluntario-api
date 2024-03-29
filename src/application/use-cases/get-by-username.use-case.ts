import { ApplicationNotFoundException } from '@application/exceptions';
import { UserRepository } from '@application/repositories';
import { User } from '@domain/entities';
import { Injectable } from '@nestjs/common';

interface GetByUsernameInput {
  username: string;
}

interface GetByUsernameOutput {
  data: User;
}

@Injectable()
export class GetByUsernameUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    username,
  }: GetByUsernameInput): Promise<GetByUsernameOutput> {
    const data = await this.userRepository.findByUsername(username);

    ApplicationNotFoundException.When(
      !data,
      `Not found user with username: ${username}`,
    );

    return { data };
  }
}
