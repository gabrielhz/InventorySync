import { Manufacturer } from '../../domain/entities/Manufacturer'

export interface IManufacturersRepository {
  findById(id: string): Promise<Manufacturer | null>
  findByEmail(email: string): Promise<Manufacturer | null>
  save(manufacturer: Manufacturer): Promise<void>
}
