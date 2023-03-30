import { randomUUID } from "crypto";
import { State } from "./state.enum";


export interface AdressData {
  zipCode: string;
  address: string;
  city: string;
  state: State;
}


export class Address {

  private _id: string
  private props: AdressData;

  constructor(
    props: AdressData
  ) {
    this._id = randomUUID()
    this.props = {
      ...props
    }
  }

  //getter id
  public get id():string {
    return this._id
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




}
