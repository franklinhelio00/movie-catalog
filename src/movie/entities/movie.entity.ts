// src/movie/entities/movie.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  director: string;

  @Column({ type: 'date', nullable: true })
  releaseDate: Date; // Permitir nulos para evitar erros de sincronização
}
