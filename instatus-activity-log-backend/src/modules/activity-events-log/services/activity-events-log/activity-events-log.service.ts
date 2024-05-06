import { Inject, Injectable } from '@nestjs/common';
import { PaginatedRequest } from '../../dto/requests/paginated.dto';
import { CreateEventCommand } from '../../dto/commands/create-event-command.dto';
import { plainToInstance } from 'class-transformer';
import { ActivityEventLogResponse } from '../../dto/response/activity-event-log.dto';
import { IActivityEventsLogRepository } from '../../repository/IActivityEventsLogRepository';

@Injectable()
export class ActivityEventsLogService {
  constructor(
    @Inject(IActivityEventsLogRepository)
    private readonly activityRepository: IActivityEventsLogRepository,
  ) {}

  async findAll(request: PaginatedRequest) {
    const result = await this.activityRepository.findAll(request);
    return plainToInstance(ActivityEventLogResponse, result, {
      excludeExtraneousValues: true,
    });
  }

  async createActivityEvent(event: CreateEventCommand) {
    await this.activityRepository.create(event);
  }
}
