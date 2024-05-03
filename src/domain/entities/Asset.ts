import { Entity } from './core/Entity'
import { ItemProps } from './Item'
import { ManufacturerProps } from './Manufacturer'

interface AssetProps {
  assetCode: string
  status: string
  item: ItemProps
  manufacturer: ManufacturerProps
  description?: string
}

class Asset extends Entity<AssetProps> {
  private constructor(props: AssetProps, id?: string) {
    super(id, props)
  }

  static create(props: AssetProps, id?: string) {
    const asset = new Asset(props, id)

    return asset
  }
}
