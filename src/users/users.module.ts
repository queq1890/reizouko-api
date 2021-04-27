import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersResolver } from './users.resolver';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersResolver],
})
export class UsersModule {}
