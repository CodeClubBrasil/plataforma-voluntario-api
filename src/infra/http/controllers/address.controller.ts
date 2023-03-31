import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateAdressBody } from 'src/application/dtos';
import { CreateAddressUseCase } from 'src/application/use-cases';

@Controller('address')
export class AdressController {
  constructor(private createAddressUseCase: CreateAddressUseCase) {}

  @ApiOperation({ summary: 'Create a new Address' })
  @Post('create')
  async create(@Body() body: CreateAdressBody) {
    console.log('GETTING INTO CONTROLLER');

    const { zipCode, address, city, state } = body;

    console.log(city + zipCode + address + state);

    const { AddressOutput } = await this.createAddressUseCase.execute({
      zipCode,
      address,
      city,
      state,
    });

    console.log('CONTROLER ' + address);
    console.table({ AddressOutput });

    return { AddressOutput };
  }
}
