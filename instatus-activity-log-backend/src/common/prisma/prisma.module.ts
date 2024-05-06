import { Module } from '@nestjs/common';
import { PrismaService } from './services/primsa.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
