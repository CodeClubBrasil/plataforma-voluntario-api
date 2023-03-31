import { Address, State } from 'src/domain';
import { AdressRepository } from '../repositories/address.repository';
import { Injectable } from '@nestjs/common';

interface AddressRequest {
  zipCode: string;
  address: string;
  city: string;
  state: string;
}

interface AdressResponse {
  adress: Address;
}

//por que a gente injeta no construtor esse repository sendo que nao tem decorator injectable nele nem provemos no modulo?
@Injectable()
export class CreateAdressUseCase {
  constructor(private adressRepostiory: AdressRepository) {}

  async execute(request: AddressRequest): Promise<AdressResponse> {
    const { zipCode, address, city, state } = request;

    console.log(
      'USE CASE CHECK IF DATA IS COMING' + zipCode,
      address,
      city,
      state,
    );

    const adress = new Address({
      zipCode,
      address,
      city,
      state: 'type' as State,
    });

    console.log('USE CASE - GETTING ID -> ' + adress.id);

    await this.adressRepostiory.create(adress);

    return { adress };
  }
}
