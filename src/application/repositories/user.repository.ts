import { User } from '@domain/entities';
import { Repository } from './repository';

export abstract class UserRepository extends Repository<User> {}
