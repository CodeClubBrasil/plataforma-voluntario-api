import { State } from '@domain/enums';
import { EntityBase, EntityBaseData } from './entity-base';
import { AvailableTime } from './available-time.entity';

export interface UserData extends EntityBaseData {
  name: string;
  lastName: string;
  username: string;
  telephone: string[];
  email: string;
  password: string;
  city: string;
  state: State;
  neighborhood: string;
  knowledges: string[];
  availableTime: AvailableTime[];
}

export class User extends EntityBase {
  protected props: UserData;

  constructor(props: UserData) {
    super(props);
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

  public get username(): string {
    return this.props.username;
  }
  public set username(username: string) {
    this.props.username = username;
  }

  public get telephone(): string[] {
    return this.props.telephone;
  }
  public set telephone(telephone: string[]) {
    this.props.telephone = telephone;
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

  public get knowledges(): string[] {
    return this.props.knowledges;
  }
  public set knowledges(knowledges: string[]) {
    this.props.knowledges = knowledges;
  }

  public get availableTime(): AvailableTime[] {
    return this.props.availableTime;
  }
  public set availableTime(availableTime: AvailableTime[]) {
    this.props.availableTime = availableTime;
  }
}
