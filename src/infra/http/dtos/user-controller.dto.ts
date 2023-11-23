import { ApiProperty } from '@nestjs/swagger';
import { AvailableTimeControllerDto } from './avaible-time-contoller.dto';
import { State } from '@domain/enums';

export class UserControllerDto {
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  user_name: string;

  @ApiProperty()
  telephone: string[];

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  city: string;

  @ApiProperty({ enum: State })
  state: string;

  @ApiProperty()
  neighborhood: string;

  @ApiProperty()
  knowledges: string[];

  @ApiProperty({ type: [AvailableTimeControllerDto] })
  available_time: AvailableTimeControllerDto[] | null;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
