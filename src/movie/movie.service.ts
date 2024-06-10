import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  findOne(id: number): Promise<Movie> {
    return this.movieRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }

  create(movie: Movie): Promise<Movie> {
    return this.movieRepository.save(movie);
  }

  async update(id: number, movie: Movie): Promise<void> {
    await this.movieRepository.update(id, movie);
  }
}
