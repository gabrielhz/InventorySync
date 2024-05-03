import { User } from '../../../entities/User'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}
export class CreateUserUseCase {
  execute(data: CreateUserRequest) {
    const user = User.create(data)
  }
}
