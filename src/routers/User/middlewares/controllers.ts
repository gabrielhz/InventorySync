import { SqlUsersRepository } from "../../../application/repositories/implementations/SqlUsersRepository";
import { createUserController } from "../../../application/useCases/UserUseCases/CreateUser";
import { listUserController } from "../../../application/useCases/UserUseCases/ListUser";
import { updateUserController } from "../../../application/useCases/UserUseCases/UpdateUser";

const create = (request, response) => {
  return createUserController.handle(request, response);
};

const update = (request, response) => {
  return updateUserController.handle(request, response);
}

const list = (request, response) => {
  return listUserController.handle(request, response);
}

export { create, update, list }
