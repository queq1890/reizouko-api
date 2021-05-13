import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Food as PrismaFood, FoodStatus } from '@prisma/client';
import { Category } from 'src/categories/models/category.model';
import { Kind } from 'src/kinds/models/kind.model';

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

  @Field(() => [Category])
  categories!: Category[];

  @Field(() => [Kind])
  kinds!: Kind[];

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
