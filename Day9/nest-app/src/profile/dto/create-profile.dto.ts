import { IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  bio: string;

  @IsNumber()
  userId: number;
}
