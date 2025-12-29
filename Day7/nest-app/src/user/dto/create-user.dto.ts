import { IsEmail, IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsInt()
  age: number;

  @IsString()
  location: string;
}
