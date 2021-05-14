import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Food as PrismaFood, FoodStatus } from '@prisma/client';
import { CategoryOnFood } from './category-on-food.model';
import { KindOnFood } from './kind-on-food.model';

@ObjectType()
export class Food implements PrismaFood {
  @Field(() => ID)
  id!: string;

  @Field()
  fridgeId!: string;

  @Field()
  purchaseDate!: Date;

  @Field(() => Date, { nullable: true })
  expirationDate!: Date | null;

  @Field()
  status!: FoodStatus;

  @Field(() => [CategoryOnFood])
  categories!: CategoryOnFood[];

  @Field(() => [KindOnFood])
  kinds!: KindOnFood[];

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
