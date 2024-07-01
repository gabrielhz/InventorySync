import { User } from '../../../../domain/entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { CreateUserRequest } from './CreateUserDTO'

export class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: CreateUserRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.props.email,
    )

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }
    const user = User.create(data.props)
    await this.usersRepository.save(user)
  }
}
