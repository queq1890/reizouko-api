import { User } from './models/user.model';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/authz/auth.gql.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async user(
    @Args('auth0_user_id', { type: () => String }) auth0_user_id: string,
  ) {
    console.log('called');
    return this.usersService.getByAuth0UserId(auth0_user_id);
  }
}
