import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { ListUserRequest } from './ListUserDTO'

export class ListUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data?: ListUserRequest) {
    if (data.id) {
      return await this.usersRepository.list(data.id)
    }
    return await this.usersRepository.list()
  }
}
