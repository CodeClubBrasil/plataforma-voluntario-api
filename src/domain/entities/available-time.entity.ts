import { Weekday } from "../enums";
import { EntityBase, EntityBaseData } from "./entity-base";

export interface AvailableTimeData extends EntityBaseData {
    weekDay: Weekday;
    timeStart: Date;
    timeEnd: Date;
}

export class AvailableTime extends EntityBase {
    protected props: AvailableTimeData;

    constructor(props: AvailableTimeData, id?: string) {
        super(props, id);
        this.props = {
            ...props,
        }
    }

    public get weekDay(): Weekday {
        return this.props.weekDay;
    }
    public set weekDay(weekDay: Weekday) {
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
}