import { Module } from '@nestjs/common';
import { UsersNestModule } from './users-nest/users-nest.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersNestModule, PostsModule],
})
export class AppModule {}
