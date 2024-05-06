import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateEventCommand } from '../../dto/commands/create-event-command.dto';
import { PaginatedRequest } from '../../dto/requests/paginated.dto';
import { ActivityEventsLogService } from '../../services/activity-events-log/activity-events-log.service';

@Controller('events')
export class ActivityEventsLogController {
  constructor(
    private readonly activityEventsLogService: ActivityEventsLogService,
  ) {}

  @Get()
  async get(@Query() request: PaginatedRequest) {
    return await this.activityEventsLogService.findAll(request);
  }

  @Post()
  async post(@Body() event: CreateEventCommand) {
    await this.activityEventsLogService.createActivityEvent(event);
  }
}
