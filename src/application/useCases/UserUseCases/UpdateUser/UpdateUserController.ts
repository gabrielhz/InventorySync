import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user, props } = request.body

    try {
      await this.updateUserUseCase.execute({
        user,
        props,
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error.',
      })
    }
  }
}
