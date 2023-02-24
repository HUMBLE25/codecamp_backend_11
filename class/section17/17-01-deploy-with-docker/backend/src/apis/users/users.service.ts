import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUsersServiceCreate,
  IUsersServiceFindOneByEmail,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';
@Injectable()
export class usersService {
  constructor(
    @InjectRepository(User) ///???무슨 에러지?
    private readonly UsersRepository: Repository<User>,
  ) {}

  //실제 조회
  findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User> {
    return this.UsersRepository.findOne({ where: { email } });
  }

  async create({
    email,
    password,
    name,
    age,
  }: IUsersServiceCreate): Promise<User> {
    //1.중복확인
    const user = await this.findOneByEmail({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');

    const hashedPassword = await bcrypt.hash(password, 10); //의존성주입을 받아야하는게 올바르다. 중복되게 사용되므로 의존성주입해주는게 맞다.
    return this.UsersRepository.save({
      email,
      password: hashedPassword,
      name,
      age,
    }); //이미 가입되어 있다면 가입안시킨다.
  }
}
