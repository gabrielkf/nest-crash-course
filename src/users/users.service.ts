import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';

const SAMPLE_USERS = [
  {
    id: 1649300345000,
    name: 'Mario Bros',
  },
  {
    id: 1649300345330,
    name: 'Bruna Venus',
  },
  {
    id: 1649300712410,
    name: 'John Travolta',
  },
  {
    id: 1649300720779,
    name: 'Abigail Travolta',
  },
  {
    id: 1649300739599,
    name: 'Arnold Bros',
  },
  {
    id: 1649300739999,
    name: 'Arnold Schwarzenegger',
  },
];

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  private users: User[] = [...SAMPLE_USERS];

  findAll(name?: string): Promise<User[]> {
    return !name
      ? this.usersRepository.find()
      : this.usersRepository.find({
          relations: ['*'],
          where: { name },
        });
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
