import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { usersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
  IAuthServiceSetRefreshToken,
} from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,

    private readonly usersService: usersService, //
  ) {}

  async login({
    email,
    password,
    context,
  }: IAuthServiceLogin): Promise<string> {
    console.log('DDDDD');
    //
    const user = await this.usersService.findOneByEmail({ email });
    //
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');
    //
    const isAuth = await bcrypt.compare(password, user.password); //순서가 바뀌면 안된다.//순식간에 되지 않는다. 시간이 걸린다.
    //
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');
    //

    //4.리프레쉬 토큰 만들어서 전달하기
    this.setRefreshToken({ user, context });
    // this.setRefreshToken({ user, res: context.res });

    //배포환경
    // context.res.setHeader(
    //   'ser-Cookie',
    //   `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly`,
    // );
    // context.res.setHeader(
    //   'Access-Control-Allow-Origin',
    //   'https://myfrontsite.com',
    // );
    return this.getAccessToken({ user });
  }

  setRefreshToken({ user, context }: IAuthServiceSetRefreshToken): void {
    const refreshToken = this.jwtService.sign(
      { sub: user.id }, //
      { secret: '나의리프레시비밀번호', expiresIn: '2w' },
    );
    //
    //개발환경
    context.res.setHeader(
      'set-Cookie',
      `refreshToken=${refreshToken}; path=/; httpOnly`, //Secure;
    );
  }
  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id }, //
      { secret: 'access', expiresIn: '1h' },
    );
  }
  restoreAccessToken({ user }) {
    return this.getAccessToken({ user });
  }
}
