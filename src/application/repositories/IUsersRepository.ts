import { User } from '../../domain/entities/User'

export interface IUsersRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  list(data?: User): Promise<User | User[]>
  save(data: User): Promise<void>
}
