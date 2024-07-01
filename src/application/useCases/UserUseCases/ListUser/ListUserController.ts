import { Request, Response } from 'express'
import { ListUserUseCase } from './ListUserUseCase'

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.body
    if (id) {
      try {
        const user = await this.listUserUseCase.execute(id)
        return response.status(200).json(user)
      } catch (err) {
        return response.status(400).json({
          error: err.message || 'Unexpected error.',
        })
      }
    }

    try {
      const users = await this.listUserUseCase.execute()

      return response.status(200).json(users)
    } catch (err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error.',
      })
    }
  }
}
