import { Entity } from './core/Entity'
import { UserProps } from './User'

interface ManagerProps extends UserProps {
  accessLevel: string
}

class Manager extends Entity<ManagerProps> {
  private constructor(props: ManagerProps, id?: string) {
    super(id, props)
  }

  static create(props: ManagerProps, id?: string) {
    const manager = new Manager(props, id)

    return manager
  }
}
