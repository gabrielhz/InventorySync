import { UseCase, Repository } from '../IFakeDataFactory'

export class FakeDataFactory<T> {
  private repository: Repository<T>
  private useCase: UseCase<T>

  // eslint-disable-next-line no-useless-constructor
  constructor(useCase: UseCase<T>, repository: Repository<T>) {
    this.useCase = useCase
    this.repository = repository
  }

  createAndSaveFakeData(repository): void {
    const fakeData = this.useCase.execute(repository)

    this.repository.save(fakeData)
  }
}
