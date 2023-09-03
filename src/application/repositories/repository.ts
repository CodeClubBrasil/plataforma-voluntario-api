export abstract class Repository<TEntity> {
  abstract create(data: TEntity): Promise<void>;

  abstract sendDocument(data: TEntity): Promise<void>;

  abstract update(code: string, data: any): Promise<void>;

  abstract update(username: string, data: any): Promise<void>;

  abstract findByCode(code: string): Promise<TEntity>;

  abstract findByUsername(username: string): Promise<TEntity>;

  abstract getAll(): Promise<TEntity[]>;

  abstract delete(code: string): Promise<void>;
}
