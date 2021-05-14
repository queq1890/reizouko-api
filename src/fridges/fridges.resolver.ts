import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/authz/auth.gql.guard';
import { Fridge } from './models/fridge.model';
import { FridgesService } from './fridges.service';
import { CreateFridgeArgs } from './dto/create-fridge.args';

@Resolver(() => Fridge)
export class FridgesResolver {
  constructor(private fridgesService: FridgesService) {}

  @Mutation(() => Fridge)
  @UseGuards(GqlAuthGuard)
  async createFridge(@Args() args: CreateFridgeArgs) {
    return this.fridgesService.create(args);
  }
}
