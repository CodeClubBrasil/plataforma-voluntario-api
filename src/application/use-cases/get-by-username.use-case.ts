import { UserRepository } from '@application/repositories';
import { User } from '@domain/entities';
import { Injectable } from '@nestjs/common';

interface GetByUsernameInput {
  userName: string;
}

interface GetByUsernameOutput {
  data: User;
}

@Injectable()
export class GetByUsernameUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userName,
  }: GetByUsernameInput): Promise<GetByUsernameOutput> {
    const data = await this.userRepository.findByUsername(userName);

   if (!data) throw new Error(`Not found user with username ${userName}`);

    return { data };
  }
}
