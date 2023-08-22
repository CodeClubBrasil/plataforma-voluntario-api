import { randomUUID } from 'crypto';

export interface EnityBaseData {
  id: string;
  active: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class EnityBase {
  protected _id: string;
  protected props: EnityBaseData;

  constructor(props: EnityBaseData, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
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

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
