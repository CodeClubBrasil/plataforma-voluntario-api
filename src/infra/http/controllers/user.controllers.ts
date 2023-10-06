import {
  CreateUserUseCase,
  GetByUsernameUseCase,
  UpdateUserUseCase,
} from '@application/use-cases';
import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserControllerDto } from '../dtos';
import { UserUpdateControllerDto } from '../dtos/user-update.controller.dto';
import { UserViewModel } from '../view-models';
import { User } from '@domain/entities';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private _createUserUseCase: CreateUserUseCase,
    private _getByUsernameUseCase: GetByUsernameUseCase,
    private _updateUserUseCase: UpdateUserUseCase,
  ) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 200 })
  @Post()
  async create(@Body() body: UserControllerDto) {
    const { UserOutput } = await this._createUserUseCase.execute({
      ...body,
    });
    return { UserOutput };
  }

  @ApiOperation({ summary: 'Get user by username' })
  @ApiParam({ name: 'username', required: true })
  @Get(':username')
  async findByUsername(@Param() params) {
    const { data } = await this._getByUsernameUseCase.execute({
      username: params.username,
    });

    return { data: UserViewModel.toHttp(data) };
  }

  @ApiOperation({ summary: 'Updated a user' })
  @ApiParam({ name: 'username', required: true })
  @Put(':username')
  async update(@Param() params, @Body() body: UserControllerDto) {
    const UserOutput = this._updateUserUseCase.execute(
      params.username,
      body,
    );

    return UserOutput ;
  }
}
