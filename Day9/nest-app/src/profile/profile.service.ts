import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepo: Repository<Profile>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}
  async create(createProfileDto: CreateProfileDto): Promise<Profile | null> {
    const { bio, userId } = createProfileDto;

    const user = await this.userRepo.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const profile = this.profileRepo.create({ bio, user });
    const data = await this.profileRepo.save(profile);
    return data;
  }

  async findAll(): Promise<Profile[]> {
    return await this.profileRepo.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    const profile = await this.profileRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  async update(
    id: number,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile | null> {
    const profile = await this.profileRepo.findOne({ where: { id } });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    await this.profileRepo.update(id, updateProfileDto);
    return profile;
  }

  async remove(id: number) {
    const profile = await this.profileRepo.findOne({ where: { id } });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return await this.profileRepo.delete(id);
  }
}
