import { Entity } from './core/Entity'
import { ManufacturerProps } from './Manufacturer'

export interface ItemProps {
  name: string
  manufacturer: ManufacturerProps
  password: string
}

class Item extends Entity<ItemProps> {
  private constructor(props: ItemProps, id?: string) {
    super(id, props)
  }

  static create(props: ItemProps, id?: string) {
    const item = new Item(props, id)

    return item
  }
}
