import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateFridgeArgs {
  @Field()
  userId!: string;
}
