import { Entity } from './core/Entity'

export interface UserProps {
  name: string
  email: string
  password: string
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(id, props)
  }

  static create(props: UserProps, id?: string) {
    const user = new User(props, id)

    return user
  }
}