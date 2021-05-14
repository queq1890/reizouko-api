import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User as PrismaUser } from '@prisma/client';
import { Fridge } from 'src/fridges/models/fridge.model';

@ObjectType()
export class User implements PrismaUser {
  @Field(() => ID)
  id!: string;

  @Field()
  auth0UserId!: string;

  @Field()
  name!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field(() => Fridge, { nullable: true })
  fridge?: Fridge;
}
