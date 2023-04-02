import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressBody {
  @ApiProperty()
  zipCode: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;
}
