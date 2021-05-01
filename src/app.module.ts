import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthzModule } from './authz/authz.module';
@Module({
  imports: [
    ConfigModule.forRoot({}),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
    AuthzModule,
  ],
})
export class AppModule {}
