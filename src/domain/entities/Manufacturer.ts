import { Entity } from './core/Entity'

export interface ManufacturerProps {
  name: string
}

class Manufacturer extends Entity<ManufacturerProps> {
  private constructor(props: ManufacturerProps, id?: string) {
    super(id, props)
  }

  static create(props: ManufacturerProps, id?: string) {
    const manufacturer = new Manufacturer(props, id)

    return manufacturer
  }
}
