import { Entity } from './core/Entity'

interface AssetProps {
  assetCode: string
  status: string
  item: string
  manufacturer: string
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
