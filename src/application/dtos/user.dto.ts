import { AvailableTimeDto } from "./avaible-time.dto";

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
    know_ledges: string[];
    available_time: AvailableTimeDto[] | null;
    active: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
  }
  