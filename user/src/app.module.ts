import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot(), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
