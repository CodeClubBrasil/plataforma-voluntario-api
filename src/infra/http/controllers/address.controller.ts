import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateAddressBody, UpdateAddressBody } from 'src/application/dtos';
import {
  CreateAddressUseCase,
  FindByIdAddressUseCase,
  GetAddressUseCase,
  UpdateAddressUseCase,
} from 'src/application/use-cases';
import { GetAddressViewModel, ListAddressViewModel } from '../view-models';
import { Address } from 'src/domain';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(
    private createAddressUseCase: CreateAddressUseCase,
    private getAddressUseCase: GetAddressUseCase,
    private findByIdAddressUseCase: FindByIdAddressUseCase,
    private updateAddressUseCase: UpdateAddressUseCase,
  ) {}

  @ApiOperation({ summary: 'Create a new Address' })
  @Post('create')
  async create(@Body() body: CreateAddressBody) {
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

  @ApiOperation({ summary: 'Updated Address' })
  @ApiParam({ name: 'code', required: true })
  @Put(':code')
  async update(@Param() params, @Body() body: UpdateAddressBody) {
    const { AddressOutput } = await this.updateAddressUseCase.execute(
      params.code,
      body,
    );

    return { AddressOutput };
  }
}
