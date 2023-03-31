import { Address } from 'src/domain';
import { AddressRepository } from '../repositories';
import { Injectable } from '@nestjs/common';

interface GetAddressResponse {
  address: Address[];
}

@Injectable()
export class GetAddressUseCase {
  constructor(private addressRepostiory: AddressRepository) {}

  async execute(): Promise<GetAddressResponse> {
    const address = await this.addressRepostiory.getAll();

    return { address };
  }
}
