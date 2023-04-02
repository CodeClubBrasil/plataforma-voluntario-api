import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../repositories';
import { Address, State } from 'src/domain';

interface AddressUpdateRequest {
  zipCode: string;
  address: string;
  city: string;
  state: string;
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

    if (!AddressOutput) throw new Error(`Not Found address with code ${code}`);

    AddressOutput.zipCode = data.zipCode;
    AddressOutput.address = data.address;
    AddressOutput.city = data.city;
    AddressOutput.state = data.state as State;

    await this.addressRepostiory.update(code, data);

    return { AddressOutput };
  }
}
