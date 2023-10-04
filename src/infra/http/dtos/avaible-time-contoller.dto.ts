import { ApiProperty } from '@nestjs/swagger';

export class AvailableTimeControllerDto {
  @ApiProperty()
  week_day: string;
  @ApiProperty()
  time_start: Date;
  @ApiProperty()
  time_end: Date;
  @ApiProperty()
  active: boolean;
  @ApiProperty()
  is_deleted: boolean;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
}
