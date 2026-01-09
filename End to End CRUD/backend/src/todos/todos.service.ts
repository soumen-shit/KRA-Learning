import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/entity/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Role } from 'src/common/enums/role.enum';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>) {}
  async create(createTodoDto: CreateTodoDto, user: any) {
    const todo = this.todoRepo.create({
      title: createTodoDto.title,
      desc: createTodoDto.desc,
      user: { id: user.userId },
    });
    return await this.todoRepo.save(todo);
  }

  async findAll(user: any) {
    if (user.role === Role.ADMIN) {
      return await this.todoRepo.find({
        relations: ['user'],
      });
    }

    return await this.todoRepo.find({
      where: { user: { id: user.userId } },
    });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto, user: any) {
    const todo = await this.todoRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!todo) throw new NotFoundException('Todo not found');

    if (user.role !== Role.ADMIN && todo.user.id !== user.userId) {
      throw new ForbiddenException();
    }

    Object.assign(todo, updateTodoDto);
    return await this.todoRepo.save(todo);
  }

  async delete(id: string, user: any) {
    const todo = await this.todoRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!todo) throw new NotFoundException('Todo not found');

    if (user.role !== Role.ADMIN && todo.user.id !== user.userId) {
      throw new ForbiddenException();
    }

    return await this.todoRepo.delete(id);
  }
}
