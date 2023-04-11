import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressBody {
  @ApiProperty()
  zip_code: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;
}
