import { User } from '../../../../domain/entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { UpdateUserRequest } from './UpdateUserDTO'

export class UpdateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: UpdateUserRequest) {
    // later update this to get the user by the token
    // look at the data transfer object
    console.log(data.user)
    const user = await this.usersRepository.findById(data.user)

    if (!user) {
      throw new Error('User not found')
    }

    const updatedUser = User.update(user, data.props)
    await this.usersRepository.save(updatedUser)
  }
}
