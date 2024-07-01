import { User, UserProps } from '../../../../domain/entities/User'

export interface UpdateUserRequest {
  // user: User
  user: string
  props: UserProps
}
