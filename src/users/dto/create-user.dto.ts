import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
