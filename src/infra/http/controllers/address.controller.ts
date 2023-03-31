import { Controller, Post, Body } from '@nestjs/common';
import { CreateAdressBody } from 'src/application/dtos/create-adress-body.dto';
import { CreateAdressUseCase } from 'src/application/use-cases/create-adress.use-case';

@Controller('address')
export class AdressController {
  constructor(private createAddressUseCase: CreateAdressUseCase) {}

  @Post('create')
  async create(@Body() body: CreateAdressBody) {
    console.log('GETTING INTO CONTROLLER');

    const { zipCode, address, city, state } = body;

    console.log(city + zipCode + address + state);

    const { adress } = await this.createAddressUseCase.execute({
      zipCode,
      address,
      city,
      state,
    });

    console.log('CONTROLER ' + address);
    console.table({ adress });

    return { adress };
  }
}
