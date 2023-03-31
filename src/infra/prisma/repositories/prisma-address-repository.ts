import { Injectable } from '@nestjs/common';
import { AddressRepository } from 'src/application/repositories';
import { PrismaService } from '../prisma.service';
import { Address } from 'src/domain';
import { PrismaAddressMapper } from '../mappers';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private prismaService: PrismaService) {}

  async create(address: Address): Promise<void> {
    console.log('METODO CHAMADO');

    await this.prismaService.address.create({
      data: {
        id: address.id,
        zipCode: address.zipCode,
        city: address.city,
        address: address.address,
        state: address.state,
      },
    });
  }

  update(code: string, data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findByCode(code: string): Promise<Address> {
    throw new Error('Method not implemented.');
  }

  findByLogin(login: string): Promise<Address> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<Address[]> {
    const address = await this.prismaService.address.findMany();

    if (!address) {
      return [];
    }

    const list: Address[] = [];
    address.map((x) => list.push(PrismaAddressMapper.toDomain(x)));

    return list;
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
