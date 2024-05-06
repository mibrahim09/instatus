import { Module } from '@nestjs/common';
import { ActivityEventsLogController } from './controllers/activity-events-log/activity-events-log.controller';
import { ActivityEventsLogService } from './services/activity-events-log/activity-events-log.service';
import { PrismaModule } from '../../common/prisma/prisma.module';
import { ActivityEventsLogRepository } from './repository/impl/ActivityEventsLogRepository';
import { IActivityEventsLogRepository } from './repository/IActivityEventsLogRepository';

@Module({
  controllers: [ActivityEventsLogController],
  providers: [
    ActivityEventsLogService,
    {
      provide: IActivityEventsLogRepository,
      useClass: ActivityEventsLogRepository,
    },
  ],
  imports: [PrismaModule],
})
export class ActivityEventsLogModule {}
