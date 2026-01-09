import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@UseGuards(JwtAuthGuard)
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @Req() req: any) {
    return this.todosService.create(createTodoDto, req.user);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.todosService.findAll(req.user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
    @Req() req: any,
  ) {
    return this.todosService.update(id, updateTodoDto, req.user);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: any) {
    return this.todosService.delete(id, req.user);
  }
}
