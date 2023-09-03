import { State } from '../enums';
import { AvailableTime } from './available-time.entity';
import { EntityBase, EntityBaseData } from './entity-base';

export interface UserData extends EntityBaseData {
  name: string;
  lastName: string;
  tels: string[];
  email: string;
  password: string;
  city: string;
  state: State;
  neighborhood: string;
  knowLedges: string[];
  availableTime: AvailableTime[];
}

export class User extends EntityBase {
  protected props: UserData;

  constructor(props: UserData, id?: string) {
    super(props, id);
    this.props = {
      ...props,
    };
  }

  public get name(): string {
    return this.props.name;
  }
  public set name(name: string) {
    this.props.name = name;
  }

  public get lastName(): string {
    return this.props.lastName;
  }
  public set lastName(lastName: string) {
    this.props.lastName = lastName;
  }

  public get tels(): string[] {
    return this.props.tels;
  }
  public set tels(tels: string[]) {
    this.props.tels = tels;
  }

  public get email(): string {
    return this.props.email;
  }
  public set email(email: string) {
    this.props.email = email;
  }

  public get password(): string {
    return this.props.password;
  }
  public set password(password: string) {
    this.props.password = password;
  }

  public get city(): string {
    return this.props.city;
  }
  public set city(city: string) {
    this.props.city = city;
  }

  public get state(): State {
    return this.props.state;
  }
  public set state(state: State) {
    this.props.state = state;
  }

  public get neighborhood(): string {
    return this.props.neighborhood;
  }
  public set neighborhood(neighborhood: string) {
    this.props.neighborhood = neighborhood;
  }

  public get knowLedges(): string[] {
    return this.props.knowLedges;
  }
  public set knowLedges(knowLedges: string[]) {
    this.props.knowLedges = knowLedges;
  }

  public get availableTime(): AvailableTime[] {
    return this.props.availableTime;
  }
  public set availableTime(availableTime: AvailableTime[]) {
    this.props.availableTime = availableTime;
  }
}
