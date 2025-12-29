import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.inerface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Soumen',
      email: 'soumen@gmail.com',
      age: 23,
      location: 'IND',
    },
    { id: 2, name: 'Alex', email: 'alex@gmail.com', age: 22, location: 'USA' },
    { id: 3, name: 'Mojo', email: 'Mojo@gmail.com', age: 24, location: 'UK' },
  ];

  getAllUsers(): User[] {
    return this.users;
  }
  getUserById(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException('Student not found!!');
    } else {
      return user;
    }
  }
  createUser(createUserDto: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
  updateUserDataAll(
    id: number,
    data: {
      name: string;
      email: string;
      age: number;
      location: string;
    },
  ) {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx == -1) {
      throw new NotFoundException('User not found!');
    }
    this.users.map((u) => {
      if (u.id === id) {
        return { id, ...data };
      } else {
        return u;
      }
    });
    return this.users;
  }

  updateUserData(
    id: number,
    data: Partial<{
      name: string;
      email: string;
      age: number;
      location: string;
    }>,
  ) {
    const user = this.getUserById(id);
    Object.assign(user, data);
    return user;
  }

  deleteUser(id: number) {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx === -1) {
      throw new NotFoundException('User not found!');
    }
    const user = this.users.filter((u) => u.id != id);
    return { message: 'User delete successfully', user };
  }
}
