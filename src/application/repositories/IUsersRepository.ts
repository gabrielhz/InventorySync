import { User } from '../../domain/entities/User'

export interface IUsersRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  list(data?: string): Promise<User | User[]>
  save(user: User): Promise<void>
}
