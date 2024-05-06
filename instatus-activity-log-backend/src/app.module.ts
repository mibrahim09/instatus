import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ActivityEventsLogModule } from './modules/activity-events-log/activity-events-log.module';
import { PrismaService } from './common/prisma/services/primsa.service';

@Module({
  imports: [ActivityEventsLogModule],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  exports: [PrismaService],
})
export class AppModule {}
