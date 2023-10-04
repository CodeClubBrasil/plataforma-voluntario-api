import { AvailableTimeControllerDto } from "./avaible-time-contoller.dto";

export class UserControllerDto {
  id: string;
  name: string;
  last_name: string;
  telephone: string[];
  email: string;
  password: string;
  city: string;
  state: string;
  neighborhood: string;
  know_ledges: string[];
  available_time: AvailableTimeControllerDto[] | null;
  active: boolean;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
}
