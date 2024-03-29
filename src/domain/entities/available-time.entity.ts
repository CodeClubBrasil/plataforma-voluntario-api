import { DomainException } from '@domain/exceptions';
import { Weekday } from '@domain/enums';
import { EntityBase, EntityBaseData } from './entity-base';

export interface AvailableTimeData extends EntityBaseData {
  weekDay: Weekday;
  timeStart: Date;
  timeEnd: Date;
  userId: string;
}

export class AvailableTime extends EntityBase {
  protected props: AvailableTimeData;

  constructor(props: AvailableTimeData) {
    super(props);
    this.props = { ...props };
  }

  public get weekDay(): Weekday {
    return this.props.weekDay;
  }
  public set weekDay(weekDay: Weekday) {
    AvailableTimeValidator.validateWeekday(weekDay);
    this.props.weekDay = weekDay;
  }

  public get timeStart(): Date {
    return this.props.timeStart;
  }
  public set timeStart(timeStart: Date) {
    this.props.timeStart = timeStart;
  }

  public get timeEnd(): Date {
    return this.props.timeEnd;
  }
  public set timeEnd(timeEnd: Date) {
    this.props.timeEnd = timeEnd;
  }

  public get userId(): string {
    return this.props.userId;
  }
  public set userId(userId: string) {
    this.props.userId = userId;
  }
}

export class AvailableTimeValidator {
  static validateWeekday(weekday: Weekday) {
    DomainException.When(
      !Object.values(Weekday).includes(weekday),
      'Invalid weekday value.',
    );
  }
}
