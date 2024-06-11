import { ApiProperty } from '@nestjs/swagger';

export class MovieDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  director: string;

  @ApiProperty()
  releaseDate: Date;
}
