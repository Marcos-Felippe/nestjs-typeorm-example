import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersNestDto } from './create-users-nest.dto';

export class UpdateUsersNestDto extends PartialType(CreateUsersNestDto) {}
