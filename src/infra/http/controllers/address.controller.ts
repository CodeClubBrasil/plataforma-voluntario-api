import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAdressBody } from 'src/application/dtos';
import {
  CreateAddressUseCase,
  GetAddressUseCase,
} from 'src/application/use-cases';
import { ListAddressViewModel } from '../view-models';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(
    private createAddressUseCase: CreateAddressUseCase,
    private getAddressUseCase: GetAddressUseCase,
  ) {}

  @ApiOperation({ summary: 'Create a new Address' })
  @Post('create')
  async create(@Body() body: CreateAdressBody) {
    console.log('GETTING INTO CONTROLLER');

    const { zipCode, address, city, state } = body;

    console.log(city + zipCode + address + state);

    const { AddressOutput } = await this.createAddressUseCase.execute({
      ...body,
    });

    console.log('CONTROLER ' + address);

    return { AddressOutput };
  }

  @ApiOperation({ summary: 'List Address' })
  @Get('list')
  async getAll() {
    const { address } = await this.getAddressUseCase.execute();
    if (!address) return 'Address Not Found';
    return {
      data: ListAddressViewModel.toHttpList(address),
      metadata: { total: address.length },
    };
  }
}
