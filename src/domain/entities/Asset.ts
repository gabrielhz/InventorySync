import { Entity } from './core/Entity'

interface ItemProps {
  id?: string
  type: string
  manufacturer?: string
}

export interface AssetProps {
  assetCode: string
  status: string
  item: ItemProps
  description?: string
}

export class Asset extends Entity<AssetProps> {
  private constructor(props: AssetProps, id?: string) {
    super(props, id)
  }

  static create(props: AssetProps, id?: string) {
    const asset = new Asset(props, id)

    return asset
  }
}
