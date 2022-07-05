import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersNestService } from './users-nest.service';
import { CreateUsersNestDto } from './dto/create-users-nest.dto';
import { UpdateUsersNestDto } from './dto/update-users-nest.dto';

@Controller('users-nest')
export class UsersNestController {
  constructor(private readonly usersNestService: UsersNestService) {}

  @Post()
  create(@Body() createUsersNestDto: CreateUsersNestDto) {
    return this.usersNestService.create(createUsersNestDto);
  }

  @Get()
  findAll() {
    return this.usersNestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersNestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUsersNestDto: UpdateUsersNestDto,
  ) {
    return this.usersNestService.update(+id, updateUsersNestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersNestService.remove(+id);
  }
}
