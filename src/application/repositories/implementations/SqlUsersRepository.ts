import { User } from '../../../domain/entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class SqlUsersRepository implements IUsersRepository {
  private users: User[] = []

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id)

    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.props.email === email)

    return user
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}
