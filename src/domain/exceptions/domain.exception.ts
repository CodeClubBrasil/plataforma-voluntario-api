export class DomainException extends Error {
  constructor(error: string) {
    super(error);
    this.name = 'DomainException';
  }

  static When(hasErrors: boolean, error: string): void {
    if (hasErrors) {
      throw new DomainException(error);
    }
  }
}
