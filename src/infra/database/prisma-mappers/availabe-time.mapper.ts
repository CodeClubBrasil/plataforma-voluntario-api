import { AvailableTime } from '@domain/entities';
import { Weekday } from '@domain/enums';
import { AvailableTimes as RawAvailableTimes } from '@prisma/client';

export class PrismaAvailableTimeMapper {
  static toPrisma(availableTime: AvailableTime) {
    return {
      id: availableTime.id,
      week_day: availableTime.weekDay as Weekday,
      time_start: availableTime.timeStart,
      time_end: availableTime.timeEnd,
      user_id: availableTime.userId,
      active: availableTime.active,
      created_at: availableTime.createdAt,
      updated_at: availableTime.updatedAt,
    };
  }

  static toPrismaList(availableTime: AvailableTime[]) {
    const availableTimes: RawAvailableTimes[] = [];
    availableTime.forEach((_availableTime) =>
      availableTimes.push({
        id: _availableTime.id,
        week_day: _availableTime.weekDay as Weekday,
        time_start: _availableTime.timeStart,
        time_end: _availableTime.timeEnd,
        user_id: _availableTime.userId,
        active: _availableTime.active,
        created_at: _availableTime.createdAt,
        updated_at: _availableTime.updatedAt,
      }),
    );
    return availableTimes;
  }

  static toDomain(raw: RawAvailableTimes): AvailableTime {
    return new AvailableTime({
      id: raw.id,
      weekDay: raw.week_day as Weekday,
      timeStart: raw.time_start,
      timeEnd: raw.time_end,
      userId: raw.user_id,
      active: raw.active,
      createdAt: raw.created_at,
      updatedAt: raw.updated_at,
    });
  }

  static toDomainList(raw: RawAvailableTimes[]): AvailableTime[] {
    const availableTimes: AvailableTime[] = [];
    raw.forEach((availableTime) => {
      const _availableTimes = new AvailableTime({
        id: availableTime.id,
        weekDay: availableTime.week_day as Weekday,
        timeStart: availableTime.time_start,
        timeEnd: availableTime.time_end,
        userId: availableTime.user_id,
        active: availableTime.active,
        createdAt: availableTime.created_at,
        updatedAt: availableTime.updated_at,
      });
      availableTimes.push(_availableTimes);
    });
    return availableTimes;
  }
}
