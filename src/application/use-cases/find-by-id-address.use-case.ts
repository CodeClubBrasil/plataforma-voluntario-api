import { Address } from 'src/domain';
import { AddressRepository } from '../repositories';
import { Injectable } from '@nestjs/common';

interface FindByIdAddressInput {
  code: string;
}

interface FindByIdAddressOutput {
  data: Address;
}

@Injectable()
export class FindByIdAddressUseCase {
  constructor(private addressRepostiory: AddressRepository) {}

  async execute({
    code,
  }: FindByIdAddressInput): Promise<FindByIdAddressOutput> {
    const data = await this.addressRepostiory.findByCode(code);

    if (!data || data.isDeleted === true)
      throw new Error(`Not Found address with code ${code}`);

    return { data };
  }
}
