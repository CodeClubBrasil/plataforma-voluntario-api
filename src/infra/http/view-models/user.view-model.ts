import { User } from "@domain/entities";
import { AvailableTimeViewModel } from "./available-time.view-model";

export class UserViewModel {
    static toHttp(user: User) {
      return {
        id: user.id,
        name: user.name,
        last_name: user.lastName,
        telephone: user.telephone,
        email: user.email,
        password: user.password,
        city: user.city,
        state: user.state,
        neighborhood: user.neighborhood,
        know_ledges: user.knowLedges,
        available_time: AvailableTimeViewModel.toHttpList(user.availableTime),
        active: user.active,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
      };
    }
  }