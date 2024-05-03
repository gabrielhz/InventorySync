export abstract class Entity<T> {
  public _id: string
  public createdAt: Date
  public props: T

  constructor(_id: string, props: T) {
    this.createdAt = new Date()
    this.props = props
    this._id = _id ?? crypto.randomUUID()
  }
}
