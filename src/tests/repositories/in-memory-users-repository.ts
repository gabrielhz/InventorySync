import { IUsersRepository } from '../../application/repositories/IUsersRepository'
import { User } from '../../domain/entities/User'

export class InMemoryStudentsRepository implements IUsersRepository {
  public users: User[] = []

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id)

    if (!user) {
      return null
    }
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
