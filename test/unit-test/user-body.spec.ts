import {
  User,
  UserData,
  AvailableTime,
  AvailableTimeData,
} from '@domain/entities';
import { State, Weekday } from '@domain/enums';
import { randomUUID } from 'crypto';

describe('User', () => {
  it('should throw an error when setting an empty name', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      telephone: ['1234567890'],
      email: 'john@example.com',
      password: 'Passw0rd!',
      city: 'SomeCity',
      state: State.AC,
      neighborhood: 'SomeNeighborhood',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.name = '';
    }).toThrowError('Name is required');
  });

  it('should throw an error when setting an empty username', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      telephone: ['1234567890'],
      email: 'john@example.com',
      password: 'Passw0rd!',
      city: 'SomeCity',
      state: State.AC,
      neighborhood: 'SomeNeighborhood',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.username = '';
    }).toThrowError('Username is required');
  });

  it('should throw an error when setting an invalid username format', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe with space',
      telephone: ['1234567890'],
      email: 'john@example.com',
      password: 'Passw0rd!',
      city: 'SomeCity',
      state: State.AC,
      neighborhood: 'SomeNeighborhood',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.username = 'johndoe with space';
    }).toThrowError('Username cannot contain spaces');
  });

  it('should throw an error when setting an invalid telephone format', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      telephone: ['invalidPhoneNumber'],
      email: 'john@example.com',
      password: 'Passw0rd!',
      city: 'SomeCity',
      state: State.AC,
      neighborhood: 'SomeNeighborhood',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.telephone = ['invalidPhoneNumber'];
    }).toThrowError(
      'Invalid telephone format, must be up to 14 digits and contain only numbers.',
    );
  });

  it('should throw an error when setting an invalid email format', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      telephone: ['1234567890'],
      email: 'invalidEmail',
      password: 'Passw0rd!',
      city: 'SomeCity',
      state: State.AC,
      neighborhood: 'SomeNeighborhood',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.email = 'invalidEmail';
    }).toThrowError('Invalid email format.');
  });

  it('should throw an error when validating a password without special characters', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      telephone: ['1234567890'],
      email: 'john@example.com',
      password: 'password123',
      city: 'SomeCity',
      state: State.AC,
      neighborhood: 'SomeNeighborhood',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.password = 'password123';
    }).toThrowError(
      /Invalid password format.*must contain.*uppercase letter.*lowercase letter.*number.*special character.*underscore.*at least 8 characters long/,
    );
  });

  it('should throw an error when setting an empty city', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      telephone: ['1234567890'],
      email: 'john@example.com',
      password: 'Passw0rd!',
      city: '',
      state: State.AC,
      neighborhood: 'SomeNeighborhood',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.city = '';
    }).toThrowError('City is required');
  });

  it('should throw an error when setting an empty neighborhood', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      telephone: ['1234567890'],
      email: 'john@example.com',
      password: 'Passw0rd!',
      city: 'SomeCity',
      state: State.AC,
      neighborhood: '',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.neighborhood = '';
    }).toThrowError('Neighborhood is required');
  });

  it('should throw an error when setting an empty email', () => {
    const availableTimeData: AvailableTimeData = {
      id: randomUUID(),
      weekDay: Weekday.SUNDAY,
      timeStart: new Date(),
      timeEnd: new Date(),
      userId: randomUUID(),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userData: UserData = {
      id: randomUUID(),
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      telephone: ['1234567890'],
      email: '',
      password: 'Passw0rd!',
      city: 'SomeCity',
      state: State.AC,
      neighborhood: 'SomeNeighborhood',
      knowledges: ['Knowledge1', 'Knowledge2'],
      availableTime: [new AvailableTime(availableTimeData)],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = new User(userData);

    expect(() => {
      user.email = '';
    }).toThrowError('Email is required');
  });
});
