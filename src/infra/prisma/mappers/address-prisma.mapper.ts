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
      active: address.active,
      is_deleted: address.isDeleted,
      created_at: address.createdAt,
      updated_at: address.updatedAt,
    };
  }

  static toDomain(raw: RawAddress): Address {
    return new Address(
      {
        address: raw.address,
        zipCode: raw.zip_code,
        city: raw.city,
        state: raw.state as State,
        active: raw.active,
        isDeleted: raw.is_deleted,
        createdAt: raw.created_at,
        updatedAt: raw.updated_at,
      },
      raw.id,
    );
  }
}
