import { ApiProperty } from '@nestjs/swagger';

export class UpdateMovieDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  director?: string;

  @ApiProperty()
  releaseDate?: Date;
}
