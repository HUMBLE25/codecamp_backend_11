// import { PayloadTooLargeException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// import { validate } from 'class-validator';
import { Strategy } from 'passport-jwt';

export class jwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        // console.log(req);
        const cookie = req.headers.cookie; // refreshToken=asdfasd
        const refreshToken = cookie.replace('refreshToken=', '');
        console.log(refreshToken); //refreshToken은 나오는데  반환을 못하는것 같다.
        return refreshToken;
      },
      secretOrKey: '나의리프레시비밀번호', //env에 빼줘야 한다.
    });
  }
  //payload 이부분에 못넘기는것 같다. 넘기지 못하는것은 어디 문제지?
  validate(payload) {
    console.log(payload, '###'); //{sub:asdff(유저ID)}
    return {
      id: payload.sub, //req.user={payload.save} //라이브러리 내부를 까보면 user로 되어 있음
    };
  }
}
