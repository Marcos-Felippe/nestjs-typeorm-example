import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersNestDto } from './dto/create-users-nest.dto';
import { UpdateUsersNestDto } from './dto/update-users-nest.dto';
import { UserNest } from './entities/users-nest.entity';

@Injectable()
export class UsersNestService {
  constructor(
    @InjectRepository(UserNest)
    private usersRepository: Repository<UserNest>,
  ) {}

  async create(createUsersNestDto: CreateUsersNestDto) {
    const user = await this.usersRepository.save(createUsersNestDto);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne(id);
    return user;
  }

  async update(id: number, updateUsersNestDto: UpdateUsersNestDto) {
    const user = await this.usersRepository.save({ ...updateUsersNestDto, id });
    return user;
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return 'Deleted successfully';
  }
}
