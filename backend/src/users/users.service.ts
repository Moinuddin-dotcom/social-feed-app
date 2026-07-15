import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/register.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  // findByEmailOrThrow(email: string) {
  //   return this.prisma.user.findUniqueOrThrow({
  //     where: {
  //       email,
  //     },
  //   });
  // }
  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  create(registerDto: RegisterDto) {
    return this.prisma.user.create({
      data: registerDto,
    });
  }
}
