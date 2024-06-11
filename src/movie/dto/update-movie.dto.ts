// src/movie/dto/update-movie.dto.ts
import { PartialType } from '@nestjs/swagger';
import { MovieDto } from './movie.dto';

export class UpdateMovieDto extends PartialType(MovieDto) {}
