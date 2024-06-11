// src/movie/movie.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { MovieDto } from './dto/movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  create(movieDto: MovieDto): Promise<Movie> {
    const movie = this.movieRepository.create(movieDto);
    return this.movieRepository.save(movie);
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  findOne(id: number): Promise<Movie> {
    return this.movieRepository.findOneBy({ id });
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<void> {
    await this.movieRepository.update(id, updateMovieDto);
  }

  async remove(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
