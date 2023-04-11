import { Address, State } from 'src/domain';
import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../repositories';

interface AddressRequest {
  zip_code: string;
  address: string;
  city: string;
  state: string;
}

interface AddressResponse {
  AddressOutput: Address;
}

@Injectable()
export class CreateAddressUseCase {
  constructor(private addressRepostiory: AddressRepository) {}

  async execute(request: AddressRequest): Promise<AddressResponse> {
    const { zip_code, address, city, state } = request;

    console.log(
      'USE CASE CHECK IF DATA IS COMING' + zip_code,
      address,
      city,
      state,
    );

    //TODO: VERIFY if these mappers with AddressRequest are valid here in ENUM I use it so that you understand that we use the enum.

    const AddressOutput = new Address({
      zipCode: request.zip_code,
      address: request.address,
      city: request.city,
      state: request.state as State,
    });

    console.log('USE CASE - GETTING ID -> ' + AddressOutput.id);
    console.table(AddressOutput);

    await this.addressRepostiory.create(AddressOutput);

    return { AddressOutput };
  }
}
