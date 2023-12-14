import { NotFoundException } from '@nestjs/common';

export class ApplicationNotFoundException extends Error {
  constructor(error: string) {
    super(error);
    this.name = 'ApplicationNotFoundException';
  }

  static When(hasErrors: boolean, error: string): void {
    if (hasErrors) {
      throw new NotFoundException(error);
    }
  }
}
