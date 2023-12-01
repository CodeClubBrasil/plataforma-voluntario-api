import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const exceptionMap = new Map<any, () => number>([
      [HttpException, () => exception.getStatus()],
      [NotFoundException, () => HttpStatus.NOT_FOUND],
      [BadRequestException, () => HttpStatus.BAD_REQUEST],
      [UnauthorizedException, () => HttpStatus.UNAUTHORIZED],
      [ForbiddenException, () => HttpStatus.FORBIDDEN],
      [InternalServerErrorException, () => HttpStatus.INTERNAL_SERVER_ERROR],
      [ConflictException, () => HttpStatus.CONFLICT],
    ]);

    const statusFn = exceptionMap.get(exception.constructor);
    const status = statusFn ? statusFn() : HttpStatus.INTERNAL_SERVER_ERROR;

    const now = new Date();
    const timestamp = now.toISOString();

    const errorResponse = {
      timestamp,
      path: ctx.getRequest().url,
      method: ctx.getRequest().method,
      message: exception.message || 'Internal Server Error',
      status,
    };

    response.status(status).json(errorResponse);
  }
}
