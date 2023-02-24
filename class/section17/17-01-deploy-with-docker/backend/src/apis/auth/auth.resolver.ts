// import { UseGuards } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver, Args, Context } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { AuthService } from './auth.services';
import { GqlAuthGuard } from './guards/gql-auth.guard';
// import { AuthGuard } from '@nestjs/passport';
@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Mutation(() => String)
  login(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Context() context: IContext,
  ): Promise<string> {
    return this.authService.login({ email, password, context });
  }
  //1.리프레쉬 토큰 인가 2. access토큰 재발급
  @UseGuards(GqlAuthGuard('refresh'))
  @Mutation(() => String)
  resotreAccessToken(
    @Context() context: IContext, //
  ): string {
    // console.log(context.req.user, '%%%%%%%%'); //못받아온다.
    return this.authService.restoreAccessToken({ user: context.req.user });
  }
}
