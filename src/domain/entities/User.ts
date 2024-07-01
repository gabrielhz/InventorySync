import { Entity } from './core/Entity'

export interface UserProps {
  name: string
  email: string
  password: string
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id)
  }

  static create(props: UserProps, id?: string) {
    return new User(props, id )
  }
  static update(user: User, props: Partial<UserProps>): User {
    return new User(
      {
        ...user.props,
        ...props,
      },
      user.id
    );
  }
}
