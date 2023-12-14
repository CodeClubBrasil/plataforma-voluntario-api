import { ConflictException } from '@nestjs/common';

export class ApplicationConflictException extends Error {
  constructor(error: string) {
    super(error);
    this.name = 'ApplicationConflictException';
  }

  static When(hasErrors: boolean, error: string): void {
    if (hasErrors) {
      throw new ConflictException(error);
    }
  }
}
