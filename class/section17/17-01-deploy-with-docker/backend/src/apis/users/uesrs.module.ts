import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { usersResolver } from './users.resolver';
import { usersService } from './users.service';

@Module({
  imports: [
    //
    TypeOrmModule.forFeature([
      User, //
    ]),
  ],
  providers: [
    usersResolver, //
    usersService,
  ],
  exports: [
    usersService, //
  ],
})
export class UsersMoudle {}
