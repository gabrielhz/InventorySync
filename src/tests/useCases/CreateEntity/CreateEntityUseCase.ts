/* eslint-disable @typescript-eslint/no-explicit-any */

export class CreateEntityUseCase {
  // eslint-disable-next-line no-useless-constructor
  private constructor(
    private Repository: new () => any,
    private UseCase: new (repository: any) => any,
    private Entity: any,
  ) {}

  static async execute(Repository, UseCase, Entity): Promise<object> {
    const repository = new Repository()
    const useCase = new UseCase(repository)
    const entityProps = Entity.example()

    const instanceClass = new CreateEntityUseCase(
      repository,
      useCase,
      entityProps,
    )
    const execute = await useCase.execute(entityProps)
    return execute
  }
}
