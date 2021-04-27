import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User as PrismaUser } from '@prisma/client';

@ObjectType()
export class User implements PrismaUser {
  @Field((type) => ID)
  id: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  name: string | null;
}
