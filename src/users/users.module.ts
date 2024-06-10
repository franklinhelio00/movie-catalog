import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository'; // Importação correta
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UsersRepository])], // Certifique-se de que UsersRepository está aqui
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
