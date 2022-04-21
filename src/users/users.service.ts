import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

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

  async findById(userId: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id: userId });

    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.usersRepository.create({ ...createUserDto });

    const savedUser = await this.usersRepository.save(newUser);

    return savedUser;
  }
}
