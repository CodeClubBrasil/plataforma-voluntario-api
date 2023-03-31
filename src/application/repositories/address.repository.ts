import { Address } from 'src/domain';
import { Repository } from './repository';

export abstract class AddressRepository extends Repository<Address> {}
