import { User } from '../../../domain/entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class SqlUsersRepository implements IUsersRepository {
  private _users: User[] = []

  get users() {
    return this._users
  }

  async list(data?: string): Promise<User | User[]> {
    if (data) {
      return await this.findById(data)
    }
    return this.users
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id)
    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.props.email === email)
    if (!user) {
      return null
    }
    return user
  }

  async save(user: User): Promise<void> {
    const userExist = await this.findById(user.id)

    if (userExist) {
      const index = this.users.indexOf(userExist)

      this.users.splice(index, 1, user)

      return
    }

    this.users.push(user)
  }
}
