import { Module } from '@nestjs/common';
import { UsersNestService } from './users-nest.service';
import { UsersNestController } from './users-nest.controller';
import { UserNest } from './entities/users-nest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserNest])],
  controllers: [UsersNestController],
  providers: [UsersNestService],
})
export class UsersNestModule {}
