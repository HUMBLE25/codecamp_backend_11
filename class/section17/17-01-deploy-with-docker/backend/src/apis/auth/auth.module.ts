import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from '../users/entities/user.entity';
import { UsersMoudle } from '../users/uesrs.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.services';
import { JwtModule } from '@nestjs/jwt';
import { jwtAccessStrategy } from './strategies/jwt.-access.strategy';
import { jwtRefreshStrategy } from './strategies/jwt.-refresh.strategy ';

@Module({
  imports: [
    JwtModule.register({}),
    UsersMoudle, //
  ], //TypeOrmModule.forFeature([User])//
  providers: [
    jwtAccessStrategy,
    jwtRefreshStrategy,
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModule {}
