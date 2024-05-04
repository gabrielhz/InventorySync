export interface UseCase<T> {
  execute(repository: T): T
}

export interface Repository<T> {
  save(data: T): void
}
