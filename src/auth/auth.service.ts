import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import * as argon from 'argon2';
import { User, UserRole } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login({ phone, password }: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        phone,
      },
    });

    if (!user) throw new ForbiddenException('User is not exist');

    const passwordMatches = await argon.verify(user.password, password);

    if (!passwordMatches)
      throw new ForbiddenException('Phone or password is incorrect');

    return {
      accessToken: await this.createToken('accessToken', user),
      refreshToken: await this.createToken('refreshToken', user),
    };
  }

  async register(dto: RegisterDto) {
    const phoneDuplicated = await this.prisma.user.findUnique({
      where: {
        phone: dto.phone,
      },
    });

    if (phoneDuplicated) throw new ForbiddenException('Phone is duplicated');

    const hashedPassword = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          password: hashedPassword,
          role: dto.role ? dto.role : UserRole.PLAYER,
        },
      });

      return {
        accessToken: await this.createToken('accessToken', user),
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException('Credential taken');
      }

      throw error;
    }
  }

  private async createToken(
    type: 'accessToken' | 'refreshToken',
    { id, name, phone, avatar, tokenVersion, role, status }: User,
  ) {
    const payload = {
      id,
      name,
      phone,
      avatar,
      role,
      status,
      ...(type === 'refreshToken' ? { tokenVersion } : {}),
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: type === 'accessToken' ? '15m' : '3d',
      secret,
    });

    return token;
  }
}
