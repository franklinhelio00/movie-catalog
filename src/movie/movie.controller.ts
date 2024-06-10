import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Movie> {
    return this.movieService.findOne(id);
  }

  @Post()
  create(@Body() movie: Movie): Promise<Movie> {
    return this.movieService.create(movie);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movie: Movie): Promise<void> {
    return this.movieService.update(id, movie);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.movieService.remove(id);
  }
}
