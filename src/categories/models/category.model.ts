import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Category as PrismaCategory } from '@prisma/client';

@ObjectType()
export class Category implements PrismaCategory {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
