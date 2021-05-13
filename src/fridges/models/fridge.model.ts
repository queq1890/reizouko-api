import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Fridge as PrismaFridge } from '@prisma/client';
import { Food } from 'src/foods/models/food.model';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Fridge implements PrismaFridge {
  @Field(() => ID)
  id!: string;

  @Field()
  userId!: string;

  @Field(() => User)
  user!: User;

  @Field(() => [Food])
  foods!: Food[];

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
