import { inMemoryDB } from '../../../../services'
import { UpdateUserController } from './UpdateUserController'
import { UpdateUserUseCase } from './UpdateUserUseCase'

const updateUserUseCase = new UpdateUserUseCase(inMemoryDB)

const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController }
