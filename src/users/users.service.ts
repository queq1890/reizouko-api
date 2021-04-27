import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data });
  }

  async getById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    console.log({ user });
    return user;
  }
}
