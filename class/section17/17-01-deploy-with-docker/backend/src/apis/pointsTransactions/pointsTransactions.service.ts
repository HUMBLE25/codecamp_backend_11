import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { DataSource, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';
import { IPointsTransactionsServiceCreate } from './interfaces/points-transactions-service.interface';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly dataSource: DataSource, //transaction을 위해 가져온다.
  ) {}

  async create({
    impUid,
    amount,
    user: _user, // :으로 앞의 인자를 삭제하고 받을 수 있다. 실무에선 이렇게 사용하진 않는다.
  }: IPointsTransactionsServiceCreate) {
    //!!!!Promise<PointTransaction>

    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('SERIALIZABLE');

    try {
      const pointTransaction = this.pointsTransactionsRepository.create({
        impUid,
        amount,
        user: _user,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });
      queryRunner.manager.save(pointTransaction);
      //기다리는게 아니다. 갔다오는게 아니다 await가 필요없다.
      await this.pointsTransactionsRepository.save(pointTransaction); // where조건은 위에서 해주었기에 조건을 안달아줘도 된다.
      //이부분만의 트렌젝션와 커밋이 생긴다. 이걸 원하지 않는다. 강제로 바꿔줘야 하나? save,findOne등이 이런식으로 작동한다.

      //이 객체를 들고가서  정장한다.
      //2.유저의 돈 찾아오기
      // const user = await this.usersRepository.findOne({
      //   where: { id: _user.id },
      // });

      // throw new Error('예기치못한 실패');
      const user = await queryRunner.manager.findOne(User, {
        where: { id: _user.id }, //row-lock// 테이블이 아닌 그 로우를 락을 걸어준다.
        lock: { mode: 'pessimistic_write' },
      });

      //3.유저의 돈 업데이트

      const updatedUser = await this.usersRepository.create({
        ...user,
        point: user.point + amount,
      }); //빈객체이다.
      //!!!!!

      await queryRunner.manager.save(updatedUser); //queryRunner에 담긴다.
      await queryRunner.commitTransaction();
      //4.최종결과 브라우저에 돌려주기
      return pointTransaction;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release(); // release가 없으면, commit 끝나도 커넥션이 안끊겨서 문제됨(하지만, 에러나면 자동끊김)
    }

    //담아서 한번에 해경해 준다.
    //1.Pointstransaction 테이블에 거래기록 1줄 생성
  }
}
