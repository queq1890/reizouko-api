import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
  @Field()
  auth0_user_id!: string;

  @Field()
  name!: string;
}
