import { Address, State } from 'src/domain';

export class GetAddressViewModel {
  static toHttp(address: Address) {
    return {
      zip_code: address.zipCode,
      address: address.address,
      city: address.city,
      state: address.state as State,
      active: address.active,
      created_at: address.createdAt,
      updated_at: address.updatedAt,
    };
  }
}
