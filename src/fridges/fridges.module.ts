import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FridgesResolver } from './fridges.resolver';
import { FridgesService } from './fridges.service';

@Module({
  providers: [PrismaService, FridgesService, FridgesResolver],
})
export class FridgesModule {}
