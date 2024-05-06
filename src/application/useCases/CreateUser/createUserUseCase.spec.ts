import { InMemoryStudentsRepository } from '../../../tests/repositories/in-memory-users-repository'
import { CreateEntityUseCase } from '../../../tests/useCases/CreateEntity/CreateEntityUseCase'
import { CreateUserUseCase } from './createUserUseCase'
import { User, UserProps } from '../../../domain/entities/User'

describe('Create user use case', () => {
  it('should be able to create a new user', async () => {
    const response = await CreateEntityUseCase.execute(
      InMemoryStudentsRepository,
      CreateUserUseCase,
      User,
    )
    console.log(response)

    expect(response).toBeTruthy()
  })
})
