import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFridgeArgs } from './dto/create-fridge.args';

@Injectable()
export class FridgesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFridgeArgs) {
    return await this.prisma.fridge.create({
      data,
      include: {
        user: true,
      },
    });
  }
}
