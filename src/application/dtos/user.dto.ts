import { AvailableTimeDto } from './avaible-time.dto';

export class UserDto {
  id: string;
  name: string;
  last_name: string;
  telephone: string[];
  email: string;
  password: string;
  city: string;
  state: string;
  neighborhood: string;
  knowledges: string[];
  available_time: AvailableTimeDto[] | null;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}
