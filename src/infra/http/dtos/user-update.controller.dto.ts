import { State } from '@domain/enums';
import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateControllerDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  city: string;

  @ApiProperty({ enum: State })
  state: string;

  @ApiProperty()
  neighborhood: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  telephone: string[];

  @ApiProperty()
  email: string;
}
