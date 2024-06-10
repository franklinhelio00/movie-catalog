import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Certifique-se de incluir a entidade User
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
