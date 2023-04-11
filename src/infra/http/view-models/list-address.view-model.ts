import { Address } from 'src/domain';

export class ListAddressViewModel {
  static toHttpList(address: Address[]) {
    const _addresss: unknown[] = [];
    address.forEach((_address) => {
      const viewModel = {
        id: _address.id,
        zip_code: _address.zipCode,
        address: _address.address,
        city: _address.city,
        state: _address.state,
        active: _address.active,
        created_at: _address.createdAt,
        updated_at: _address.updatedAt,
      };
      _addresss.push(viewModel);
    });
    return _addresss;
  }
}
