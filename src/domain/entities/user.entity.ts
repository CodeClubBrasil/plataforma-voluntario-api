import { State } from '@domain/enums';
import { EntityBase, EntityBaseData } from './entity-base';
import { AvailableTime } from './available-time.entity';
import { DomainException } from '@domain/exceptions';

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
    UserValidator.validateName(name);
    this.props.name = name;
  }

  public get lastName(): string {
    return this.props.lastName;
  }
  public set lastName(lastName: string) {
    UserValidator.validateName(lastName);
    this.props.lastName = lastName;
  }

  public get username(): string {
    return this.props.username;
  }
  public set username(username: string) {
    UserValidator.validateUsername(username);
    this.props.username = username;
  }

  public get telephone(): string[] {
    return this.props.telephone;
  }
  public set telephone(telephone: string[]) {
    UserValidator.validateTelephone(telephone);
    this.props.telephone = telephone;
  }

  public get email(): string {
    return this.props.email;
  }
  public set email(email: string) {
    UserValidator.validateEmail(email);
    this.props.email = email;
  }

  public get password(): string {
    return this.props.password;
  }
  public set password(password: string) {
    UserValidator.validatePassword(password);
    this.props.password = password;
  }

  public get city(): string {
    return this.props.city;
  }
  public set city(city: string) {
    UserValidator.validateCity(city);
    this.props.city = city;
  }

  public get state(): State {
    return this.props.state;
  }
  public set state(state: State) {
    UserValidator.validateState(state);
    this.props.state = state;
  }

  public get neighborhood(): string {
    return this.props.neighborhood;
  }
  public set neighborhood(neighborhood: string) {
    UserValidator.validateNeighborhood(neighborhood);
    this.props.neighborhood = neighborhood;
  }

  public get knowledges(): string[] {
    return this.props.knowledges;
  }
  public set knowledges(knowledges: string[]) {
    UserValidator.validateKnowledges(knowledges);
    this.props.knowledges = knowledges;
  }

  public get availableTime(): AvailableTime[] {
    return this.props.availableTime;
  }
  public set availableTime(availableTime: AvailableTime[]) {
    this.props.availableTime = availableTime;
  }
}

export class UserValidator {
  static validateName(name: string) {
    DomainException.When(name.length === 0, 'Name is required');
    DomainException.When(
      name.length < 3,
      'Invalid name, too short, minimum 3 characters',
    );
  }

  static validateUsername(username: string) {
    DomainException.When(username.length === 0, 'Username is required');
    DomainException.When(
      username.length < 3,
      'Invalid username, too short, minimum 3 characters',
    );
    DomainException.When(/\s/.test(username), 'Username cannot contain spaces');
  }

  static validateTelephone(telephones: string[]) {
    for (const telephone of telephones) {
      DomainException.When(
        telephone.length > 14,
        'Invalid telephone format, must be up to 14 digits.',
      );
    }
  }

  static validateEmail(email: string) {
    DomainException.When(email.length === 0, 'Email is required');
    DomainException.When(
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      'Invalid email format.',
    );
  }

  static validatePassword(password: string) {
    DomainException.When(
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/.test(
        password,
      ),
      'Invalid password format. It must contain at least one uppercase letter, one lowercase letter, one number, one special character (@$!%*?&), one underscore (_), and be at least 8 characters long.',
    );
  }

  static validateCity(city: string) {
    DomainException.When(city.length === 0, 'City is required');
    DomainException.When(
      city.length < 3,
      'Invalid city, too short, minimum 3 characters',
    );
  }

  static validateState(state: State) {
    DomainException.When(
      !Object.values(State).includes(state),
      'Invalid state value.',
    );
  }

  static validateNeighborhood(neighborhood: string) {
    DomainException.When(neighborhood.length === 0, 'Neighborhood is required');
    DomainException.When(
      neighborhood.length < 3,
      'Invalid neighborhood, too short, minimum 3 characters',
    );
  }

  static validateKnowledges(knowledges: string[]) {
    for (const knowledge of knowledges) {
      DomainException.When(
        knowledge.length < 3,
        'Invalid knowledge, too short, minimum 3 characters',
      );
    }
  }
}
