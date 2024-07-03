import { Asset } from '../../../domain/entities/Asset'
import { IAssetsRepository } from '../IAssetsRepository'

export class InMemoryAssets implements IAssetsRepository {
  private _assets: Asset[] = []

  get assets() {
    return this._assets
  }

  async findById(id: string): Promise<Asset | null> {
    return this._assets.find((asset) => asset.id === id) || null
  }

  async findByAssetCode(code: string): Promise<Asset | null> {
    return this._assets.find((asset) => asset.props.assetCode === code) || null
  }

  async list(data?: Asset): Promise<Asset | Asset[]> {
    if (data) {
      return await this.findById(data.id)
    }
    return this.assets
  }

  async save(data: Asset): Promise<void> {
    const userExist = await this.findById(data.id)

    if (userExist) {
      const index = this.assets.indexOf(userExist)

      this.assets.splice(index, 1, data)

      return
    }

    this.assets.push(data)
  }
}
