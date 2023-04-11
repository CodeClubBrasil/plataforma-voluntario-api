import { Address, State } from 'src/domain';
import { Address as RawAddress } from '@prisma/client';

export class PrismaAddressMapper {
  static toPrisma(address: Address) {
    return {
      id: address.id,
      zip_code: address.zipCode,
      address: address.address,
      city: address.city,
      state: address.state as State,
    };
  }

  static toDomain(raw: RawAddress): Address {
    return new Address(
      {
        address: raw.address,
        zipCode: raw.zip_code,
        city: raw.city,
        state: raw.state as State,
      },
      raw.id,
    );
  }
}
