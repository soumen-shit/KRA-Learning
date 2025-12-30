import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('user') //Decorator
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }
  @Post()
  createUser(
    @Body(new UppercasePipe())
    createUserDto: CreateUserDto,
  ) {
    return this.userService.createUser(createUserDto);
  }
  @Put(':id')
  updateUserDataAll(
    @Param('id') id: string,
    @Body()
    createUserDto: CreateUserDto,
  ) {
    return this.userService.updateUserDataAll(Number(id), createUserDto);
  }

  @Patch(':id')
  updateUserData(
    @Param('id') id: string,
    @Body()
    createUserDto: Partial<CreateUserDto>,
  ) {
    return this.userService.updateUserData(Number(id), createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
