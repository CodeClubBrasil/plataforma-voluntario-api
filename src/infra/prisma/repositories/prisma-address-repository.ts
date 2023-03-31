import { Injectable } from '@nestjs/common';
import { AdressRepository } from 'src/application/repositories';
import { PrismaService } from '../prisma.service';
import { Address } from 'src/domain';

@Injectable()
export class PrismaAdressRepository implements AdressRepository {
  constructor(private prismaService: PrismaService) {}

  async create(address: Address): Promise<void> {
    console.log('METODO CHAMADO');

    await this.prismaService.adress.create({
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
  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Address[]> {
    throw new Error('Method not implemented.');
  }
  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
