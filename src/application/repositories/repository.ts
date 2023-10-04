export abstract class Repository<TEntity> {
  abstract create(data: TEntity): Promise<void>;

  abstract sendDocument(data: TEntity): Promise<void>;

  abstract update(username: string, data: any): Promise<void>;

  abstract findByUsername(username: string): Promise<TEntity>;
}
