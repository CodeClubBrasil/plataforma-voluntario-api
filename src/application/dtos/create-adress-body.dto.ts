import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { State } from 'src/domain';

export class CreateAdressBody {
  @ApiProperty()
  @IsNotEmpty()
  zipCode: string;

  @ApiProperty()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ enum: State })
  @IsNotEmpty()
  state: string;
}
