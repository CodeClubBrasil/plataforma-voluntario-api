import { AvailableTime } from '@domain/entities';

export class AvailableTimeViewModel {
  static toHttpList(availableTime: AvailableTime[]) {
    const _availableTimes: unknown[] = [];
    availableTime.forEach((_availableTime) => {
      const viewModel = {
        week_day: _availableTime.weekDay,
        time_start: _availableTime.timeStart,
        time_end: _availableTime.timeEnd,
      };
      _availableTimes.push(viewModel);
    });
    return _availableTimes;
  }
}
