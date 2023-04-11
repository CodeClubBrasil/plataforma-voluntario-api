import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../repositories';
import { Address, State } from 'src/domain';

interface AddressUpdateRequest {
  zip_code: string;
  address: string;
  city: string;
  state: string;
  active: boolean;
}

interface AddressUpdateResponse {
  AddressOutput: Address;
}

@Injectable()
export class UpdateAddressUseCase {
  constructor(private addressRepostiory: AddressRepository) {}

  async execute(
    code: string,
    data: AddressUpdateRequest,
  ): Promise<AddressUpdateResponse> {
    const AddressOutput = await this.addressRepostiory.findByCode(code);

    if (!AddressOutput || AddressOutput.isDeleted === true)
      throw new Error(`Not Found address with code ${code}`);

    AddressOutput.zipCode = data.zip_code;
    AddressOutput.address = data.address;
    AddressOutput.city = data.city;
    AddressOutput.state = data.state as State;
    AddressOutput.active = data.active;
    AddressOutput.updatedAt = new Date();

    await this.addressRepostiory.update(code, data);

    return { AddressOutput };
  }
}
