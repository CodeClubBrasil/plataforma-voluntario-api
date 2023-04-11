import { ApiProperty } from '@nestjs/swagger';
import { State } from 'src/domain';

export class UpdateAddressBody {
  @ApiProperty()
  zip_code: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty({ enum: State })
  state: string;

  @ApiProperty({ type: Boolean })
  active: boolean;

  @ApiProperty({ type: Date })
  updated_at: Date;
}
