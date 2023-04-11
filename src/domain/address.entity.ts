import { randomUUID } from 'crypto';
import { State } from '.';

export interface AdressData {
  zipCode: string;
  address: string;
  city: string;
  state: State;
  active: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Address {
  private _id: string;
  private props: AdressData;

  constructor(props: AdressData, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set zipCode(zipCode: string) {
    this.props.zipCode = zipCode;
  }

  public get zipCode(): string {
    return this.props.zipCode;
  }

  public set address(address: string) {
    this.props.address = address;
  }

  public get address(): string {
    return this.props.address;
  }

  public set city(city: string) {
    this.props.city = city;
  }

  public get city(): string {
    return this.props.city;
  }

  public set state(state: State) {
    this.props.state = state;
  }

  public get state(): State {
    return this.props.state;
  }

  public get active(): boolean {
    return this.props.active;
  }
  public set active(active: boolean) {
    this.props.active = active;
  }

  public get isDeleted(): boolean {
    return this.props.isDeleted;
  }
  public set isDeleted(isDeleted: boolean) {
    this.props.isDeleted = isDeleted;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
