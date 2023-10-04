import { UserRepository } from '@application/repositories';
import { User } from '@domain/entities';
import { State } from '@domain/enums';
import { UserUpdateControllerDto } from '@infra/http/dtos/user-update.controller.dto';
import { Injectable } from '@nestjs/common';

Injectable();
export class InMemoryUserRepository implements UserRepository {
  private user: User[];
  constructor() {
    this.user = [];
  }

  async create(data: User): Promise<void> {
    this.user.push(data);
  }

  async sendDocument(data: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async update(username: string, data: UserUpdateControllerDto): Promise<void> {
    const userFindByUsername = this.user.find(
      (user) => user.email === username,
    );

    userFindByUsername.lastName = data.last_name;
    userFindByUsername.password = data.password;
    userFindByUsername.city = data.city;
    userFindByUsername.name = data.name;
    userFindByUsername.state = data.state as State;
    userFindByUsername.neighborhood = data.neighborhood;
    userFindByUsername.telephone = data.telephone;
    //userFindByUsername.email = data.email;
  }

  async findByUsername(username: string): Promise<User> {
    const userFindByUsername = this.user.find(
      (user) => user.email === username,
    );

    return userFindByUsername;
  }
}
