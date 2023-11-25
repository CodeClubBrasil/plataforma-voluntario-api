import { Weekday } from '@domain/enums';
import { ApiProperty } from '@nestjs/swagger';

export class AvailableTimeControllerDto {
  @ApiProperty({ enum: Weekday })
  week_day: string;

  @ApiProperty()
  time_start: Date;

  @ApiProperty()
  time_end: Date;

  user_id: string;

  active: boolean;

  created_at: Date;

  updated_at: Date;
}
