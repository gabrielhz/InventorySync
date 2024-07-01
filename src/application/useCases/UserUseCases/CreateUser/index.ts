import { inMemoryDB } from '../../../../services'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const createUserUseCase = new CreateUserUseCase(inMemoryDB)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
