import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Fridge as PrismaFridge } from '@prisma/client';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Fridge implements PrismaFridge {
  @Field(() => ID)
  id!: string;

  @Field()
  userId!: string;

  @Field()
  user!: User;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
