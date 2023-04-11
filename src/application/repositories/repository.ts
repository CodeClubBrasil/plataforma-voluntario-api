export abstract class Repository<TEntity> {
  abstract create(data: TEntity): Promise<void>;

  abstract update(code: string, data: any): Promise<void>;

  abstract findByCode(code: string): Promise<TEntity>;

  abstract findByLogin(login: string): Promise<TEntity>;

  abstract getAll(): Promise<TEntity[]>;

  abstract delete(code: string): Promise<void>;
}