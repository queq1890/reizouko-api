import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserArgs } from './dto/create-user.args';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserArgs) {
    return await this.prisma.user.create({ data });
  }

  async getById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async getByAuth0UserId(auth0UserId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        auth0UserId,
      },
      include: {
        fridge: {
          include: {
            foods: {
              include: {
                kinds: {
                  include: {
                    kind: true,
                  },
                },
                categories: {
                  include: {
                    category: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return user;
  }
}
