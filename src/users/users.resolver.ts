import { User } from './models/user.model';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/authz/auth.gql.guard';
import { CreateUserArgs } from './dto/create-user.args';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async createUser(@Args() args: CreateUserArgs) {
    return this.usersService.create(args);
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async user(@Args('auth0UserId', { type: () => String }) auth0UserId: string) {
    return this.usersService.getByAuth0UserId(auth0UserId);
  }
}
