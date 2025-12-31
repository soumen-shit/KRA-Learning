import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { prodName, orderQty, userId } = createOrderDto;
    const user = await this.userRepo.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.isActive) {
      throw new NotFoundException('You are on deactivate');
    }

    const order = this.orderRepo.create({ prodName, orderQty, user });

    return await this.orderRepo.save(order);
  }

  async findAll() {
    return await this.orderRepo.find({
      relations: ['user'],
      where: {
        user: {
          isActive: true,
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.orderRepo.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepo.findOne({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }
    await this.orderRepo.update(id, updateOrderDto);
    return order;
  }

  async remove(id: number) {
    const order = await this.orderRepo.findOne({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return await this.orderRepo.delete(id);
  }
}
