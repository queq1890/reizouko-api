import { User } from './models/user.model';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  async user(@Args('id', { type: () => String }) id: string) {
    return this.usersService.getById(id);
  }
}
