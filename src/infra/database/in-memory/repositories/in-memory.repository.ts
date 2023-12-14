import { UserRepository } from '@application/repositories';
import { User } from '@domain/entities';
import { State } from '@domain/enums';
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

  async update(username: string, data: User): Promise<void> {
    const userFindByUsername = this.user.find(
      (user) => user.username === username,
    );

    userFindByUsername.name = data.name;
    userFindByUsername.lastName = data.lastName;
    userFindByUsername.password = data.password;
    userFindByUsername.city = data.city;
    userFindByUsername.state = data.state as State;
    userFindByUsername.neighborhood = data.neighborhood;
    userFindByUsername.telephone = data.telephone;
    userFindByUsername.email = data.email;
  }

  async findByUsername(username: string): Promise<User> {
    const userFindByUsername = this.user.find(
      (user) => user.username === username,
    );

    return userFindByUsername;
  }
}
