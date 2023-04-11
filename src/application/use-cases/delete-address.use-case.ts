import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../repositories';

@Injectable()
export class DeleteAddressUseCase {
  constructor(private addressRepostiory: AddressRepository) {}

  async execute(code: string): Promise<void> {
    const AddressOutput = await this.addressRepostiory.findByCode(code);

    if (!AddressOutput) throw new Error(`Not Found address with code ${code}`);

    AddressOutput.updatedAt = new Date();
    AddressOutput.isDeleted = true;

    return await this.addressRepostiory.delete(code);
  }
}
