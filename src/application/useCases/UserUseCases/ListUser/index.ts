import { inMemoryDB } from '../../../../services'
import { ListUserController } from './ListUserController'
import { ListUserUseCase } from './ListUserUseCase'

const listUserUseCase = new ListUserUseCase(inMemoryDB)

const listUserController = new ListUserController(listUserUseCase)

export { listUserController }
