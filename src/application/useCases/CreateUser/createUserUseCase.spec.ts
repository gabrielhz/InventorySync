import { InMemoryStudentsRepository } from '../../../tests/repositories/in-memory-users-repository'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { CreateUserUseCase } from './createUserUseCase'
function GenerateFakeUserFactory(usersRepository: IUsersRepository) {
  function GenerateUser() {
    return {
      name: 'fake-user-name',
      email: 'fake-user@email.com',
      password: '12345',
    }
  }
  function GenerateDuplicatedUsers() {
    const user = GenerateUser()
  }
}
describe('Create user use case', () => {
  it('should be able to create a new user', async () => {
    const usersRepository = new InMemoryStudentsRepository()
    const sut = new CreateUserUseCase(usersRepository)

    // const user = await sut.execute({
    //   name: 'fake-user-name',
    //   email: 'fake-user@email.com',
    //   password: '12345',
    // })

    // usersRepository.save(user)

    const response = await sut.execute({
      name: 'fake-user-name',
      email: 'fake-user@email.com',
      password: '12345',
    })
    it('should be able to return the User ID', () => {
      expect(response.id)
    })

    expect(response).toBeTruthy()
  })
})
