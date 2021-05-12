import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
  @Field()
  auth0UserId!: string;

  @Field()
  name!: string;
}
