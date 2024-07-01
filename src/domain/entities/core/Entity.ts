export abstract class Entity<T> {
  public _id: string
  public createdAt: Date
  public props: T

  get id() {
    return this._id
  }

  constructor(props: T, id: string) {
    this.createdAt = new Date()
    this.props = props
    this._id = id ?? crypto.randomUUID()
  }
}
