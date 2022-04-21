import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
