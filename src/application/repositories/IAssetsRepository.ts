import { Asset } from '../../domain/entities/Asset'

export interface IAssetsRepository {
  findById(id: string): Promise<Asset | null>
  findByAssetCode(code: string): Promise<Asset | null>
  list(data?: Asset): Promise<Asset | Asset[]>
  save(data: Asset): Promise<void>
}
