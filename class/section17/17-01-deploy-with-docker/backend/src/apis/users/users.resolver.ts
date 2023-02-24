import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { User } from './entities/user.entity';
import { usersService } from './users.service';

@Resolver()
export class usersResolver {
  constructor(
    private readonly usersService: usersService, //
  ) {}

  //graph-req 방식은 rest와 다르다 그래서 rest-api방식으로 바꿔줘야 한다.
  @UseGuards(GqlAuthGuard('access')) //rest-api인가방식
  @Query(() => String)
  fetchUser(
    @Context() context: IContext, //
  ): string {
    console.log(context.req);
    console.log('+++++++++++++++');
    console.log(context.req.user);
    console.log('+++++++++++++++');
    return '인가에 성공하였습니다.';
  }

  @Mutation(() => User) // 리턴 타입이 유저 타입이다.
  createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args({ name: 'age', type: () => Int }) age: number,
  ): Promise<User> {
    return this.usersService.create({ email, password, name, age });
  }
}
