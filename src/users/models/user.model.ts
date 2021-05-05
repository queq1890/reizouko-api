import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User as PrismaUser } from '@prisma/client';

@ObjectType()
export class User implements PrismaUser {
  @Field(() => ID)
  id!: string;

  @Field()
  auth0_user_id!: string;
}
