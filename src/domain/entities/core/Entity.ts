export abstract class Entity<T> {
  protected _id: string
  public createdAt: Date
  public props: T

  get id() {
    return this._id
  }

  constructor(id: string, props: T) {
    this.createdAt = new Date()
    this.props = props
    this._id = id ?? crypto.randomUUID()
  }
}
