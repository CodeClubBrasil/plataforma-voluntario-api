import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { State } from 'src/domain';

export class CreateAddressBody {
  @ApiProperty()
  @IsNotEmpty()
  zip_code: string;

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
