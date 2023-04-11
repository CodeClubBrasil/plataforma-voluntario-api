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
    const addressMapper = PrismaAddressMapper.toPrisma(address);

    await this.prismaService.address.create({
      data: {
        ...addressMapper,
      },
    });
  }

  async update(code: string, data: Address) {
    const addressMapper = PrismaAddressMapper.toPrisma(data);

    await this.prismaService.address.update({
      where: { id: code },
      data: {
        ...addressMapper,
      },
    });
  }

  async findByCode(code: string): Promise<Address> {
    const address = await this.prismaService.address.findUnique({
      where: { id: code },
    });
    if (!address) {
      return null;
    } else {
      return PrismaAddressMapper.toDomain(address);
    }
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
