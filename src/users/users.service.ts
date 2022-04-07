import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

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
  private users: User[] = [...SAMPLE_USERS];

  findAll(name?: string): User[] {
    return !name
      ? this.users
      : this.users.filter((user) => {
          const nameRegex = new RegExp(name, 'i');
          return nameRegex.test(user.name);
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
