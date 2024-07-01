import { SqlUsersRepository } from "./application/repositories/implementations/SqlUsersRepository";

export const inMemoryDB = new SqlUsersRepository()
