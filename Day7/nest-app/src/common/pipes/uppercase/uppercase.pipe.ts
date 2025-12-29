import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    if (typeof value === 'object' && value !== null) {
      if (value.name) {
        value.name = value.name.toUpperCase();
      }
    }
    return value;
  }
}
