import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoriesOnFoods as PrismaCategoriesOnFoods } from '@prisma/client';
import { Category } from 'src/categories/models/category.model';

@ObjectType()
export class CategoryOnFood implements PrismaCategoriesOnFoods {
  @Field(() => ID)
  id!: string;

  @Field()
  categoryId!: string;

  @Field()
  foodId!: string;

  @Field(() => Category)
  category!: Category;
}
