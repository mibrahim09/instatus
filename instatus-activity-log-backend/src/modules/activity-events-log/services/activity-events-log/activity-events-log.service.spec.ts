import { Test, TestingModule } from '@nestjs/testing';
import { ActivityEventsLogService } from './activity-events-log.service';

describe('ActivityEventsLogService', () => {
  let service: ActivityEventsLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityEventsLogService],
    }).compile();

    service = module.get<ActivityEventsLogService>(ActivityEventsLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
