import { User } from '../../../domain/entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { CreateUserRequest } from './CreateUserDTO'

export class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: CreateUserRequest) {
    const user = await this.usersRepository.findByEmail(data.email)

    if (user) {
      throw new Error('User already exists')
    }

    const newUser = User.create(data)

    return newUser
  }
}
