import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateAdressBody } from 'src/application/dtos';
import {
  CreateAddressUseCase,
  FindByIdAddressUseCase,
  GetAddressUseCase,
} from 'src/application/use-cases';
import { GetAddressViewModel, ListAddressViewModel } from '../view-models';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(
    private createAddressUseCase: CreateAddressUseCase,
    private getAddressUseCase: GetAddressUseCase,
    private findByIdAddressUseCase: FindByIdAddressUseCase,
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

  @ApiOperation({ summary: 'Get Address by code' })
  @ApiParam({ name: 'code', required: true })
  @Get(':code')
  async findByCode(@Param() params) {
    const { data } = await this.findByIdAddressUseCase.execute({
      code: params.code,
    });

    return { data: GetAddressViewModel.toHttp(data) };
  }
}
