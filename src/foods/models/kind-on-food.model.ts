import { Field, ID, ObjectType } from '@nestjs/graphql';
import { KindsOnFoods as PrismaKindsOnFoods } from '@prisma/client';
import { Kind } from 'src/kinds/models/kind.model';

@ObjectType()
export class KindOnFood implements PrismaKindsOnFoods {
  @Field(() => ID)
  id!: string;

  @Field()
  kindId!: string;

  @Field()
  foodId!: string;

  @Field(() => Kind)
  kind!: Kind;
}
