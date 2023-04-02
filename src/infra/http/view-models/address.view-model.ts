import { Address, State } from 'src/domain';

export class GetAddressViewModel {
  static toHttp(address: Address) {
    return {
      zipCode: address.zipCode,
      address: address.address,
      city: address.city,
      state: address.state as State,
    };
  }
}
