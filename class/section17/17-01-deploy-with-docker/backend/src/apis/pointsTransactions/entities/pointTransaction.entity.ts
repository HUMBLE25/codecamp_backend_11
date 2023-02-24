import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum POINT_TRANSACTION_STATUS_ENUM {
  PAYMENT = 'PAYMET',
  CANCLE = 'CANCLE',
}

registerEnumType(POINT_TRANSACTION_STATUS_ENUM, {
  name: 'POINT_TRANSACTION_STATUS_ENUM',
});
// POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
// POINT_TRANSACTION_STATUS_ENUM.CANCLE
//협업을 하다보면 누군가는 실수를 한다.

@Entity()
@ObjectType()
export class PointTransaction {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  impUid: string;

  @Column()
  @Field(() => Int)
  amount: number;

  @Column({ type: 'enum', enum: POINT_TRANSACTION_STATUS_ENUM }) //enum타입 작성방법.
  @Field(() => POINT_TRANSACTION_STATUS_ENUM)
  status: POINT_TRANSACTION_STATUS_ENUM;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  //insertonly table 수정은 없다.
  //수정이아니라 하나를더 추가한다.
  //동일한 imp_uid에 추가한다.
  //기존데이터를 수정하지 않고 추가ㅏㄴ 한다. 그러면 history를 추적할 수 있다.
}
