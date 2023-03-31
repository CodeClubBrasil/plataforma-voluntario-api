import { Address, State } from 'src/domain';
import { Injectable } from '@nestjs/common';
import { AdressRepository } from '../repositories/address.repository';

interface AddressRequest {
  zipCode: string;
  address: string;
  city: string;
  state: string;
}

interface AddressResponse {
  AddressOutput: Address;
}

@Injectable()
export class CreateAddressUseCase {
  constructor(private addressRepostiory: AdressRepository) {}

  async execute(request: AddressRequest): Promise<AddressResponse> {
    const { zipCode, address, city, state } = request;

    console.log(
      'USE CASE CHECK IF DATA IS COMING' + zipCode,
      address,
      city,
      state,
    );

    const AddressOutput = new Address({
      zipCode,
      address,
      city,
      state: 'type' as State,
    });

    console.log('USE CASE - GETTING ID -> ' + AddressOutput.id);

    await this.addressRepostiory.create(AddressOutput);

    return { AddressOutput };
  }
}
