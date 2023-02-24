import { PayloadTooLargeException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { validate } from 'class-validator';
import { ExtractJwt, Strategy } from 'passport-jwt';

// import {kakaoStrategy} from 'passport-kakao'
// import {naverStrategy}from 'passport-naver'
// import {GoogleStrategy} from 'passport-google'
export class jwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'access',
    });
  }
  //부모 클래스가 실행시키는 것이기에 반드시 함수이름은 vlidate이어야 한다.

  validate(payload) {
    console.log(payload); //{sub:asdff(유저ID)}
    return {
      id: payload.sub, //req.user={payload.save}
    };
  }
}
