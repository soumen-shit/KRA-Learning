import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  prodName: string;

  @IsInt()
  orderQty: number;

  @IsNumber()
  userId: number;
}
