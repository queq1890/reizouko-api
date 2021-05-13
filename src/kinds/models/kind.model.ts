import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Kind as PrismaKind } from '@prisma/client';

@ObjectType()
export class Kind implements PrismaKind {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
