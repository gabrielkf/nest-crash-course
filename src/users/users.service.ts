import { UpdateUserDto } from './dto/update-user.dto';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

const EMPTY_FIELDS_MESSAGE = 'No fields were given to update';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  findAll(name?: string): Promise<User[]> {
    return !name
      ? this.usersRepository.find()
      : this.usersRepository.find({
          relations: ['*'],
          where: { name },
        });
  }

  async findByIdAsync(id: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) throw new NotFoundException();

    return user;
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create({
      ...createUserDto,
    });

    return this.usersRepository.save(newUser);
  }

  async updateUserAsync(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) throw new NotFoundException();

    const changingKeys = Object.keys(updateUserDto);

    if (!changingKeys.length) {
      throw new HttpException(EMPTY_FIELDS_MESSAGE, HttpStatus.NOT_ACCEPTABLE);
    }

    changingKeys.forEach((key) => (user[key] = updateUserDto[key]));

    return await this.usersRepository.save(user);
  }

  async deleteUserAsync(id: string): Promise<void> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) throw new NotFoundException();

    this.usersRepository.remove(user);
  }
}
