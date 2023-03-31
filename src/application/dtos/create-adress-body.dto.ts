import { IsNotEmpty } from '@nestjs/class-validator';
import { State } from 'src/domain';

export class CreateAdressBody {
  @IsNotEmpty()
  zipCode: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  state: State;
}
