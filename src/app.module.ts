import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({}),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    UsersModule,
  ],
})
export class AppModule {}
