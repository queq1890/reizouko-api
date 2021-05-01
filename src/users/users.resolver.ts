import { User } from './models/user.model';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/authz/auth.gql.guard';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  @UseGuards(GqlAuthGuard)
  async user(@Args('id', { type: () => String }) id: string) {
    return this.usersService.getById(id);
  }
}
