import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOkResponse({ type: User, isArray: true, description: 'In memory users' })
  @ApiQuery({ name: 'name', required: false })
  getUsers(@Query('name') name: string): Promise<User[]> {
    return this.usersService.findAll(name);
  }

  @Get(':id')
  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse({ description: 'No user with provided id' })
  getUserById(@Param('id') id: string): Promise<User> {
    const userById = this.usersService.findById(id);

    if (!userById) {
      throw new NotFoundException(`No user with id ${id}`);
    }

    return userById;
  }

  @Post()
  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse({ description: 'Name field is required' })
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);
  }
}
