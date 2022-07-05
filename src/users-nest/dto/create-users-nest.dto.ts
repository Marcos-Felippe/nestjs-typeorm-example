import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersNestDto {
  @ApiProperty({ required: true })
  @IsString()
  username: string;

  @ApiProperty({ required: true })
  @IsString()
  email: string;
}
