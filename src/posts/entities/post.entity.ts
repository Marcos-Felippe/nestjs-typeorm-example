import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserNest } from 'src/users-nest/entities/users-nest.entity';

@Entity({ name: 'users_posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  user_id: number;

  @ManyToOne(() => UserNest)
  @JoinColumn({ referencedColumnName: 'id', name: 'user_id' })
  user: UserNest;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
