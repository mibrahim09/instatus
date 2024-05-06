import { Test, TestingModule } from '@nestjs/testing';
import { ActivityEventsLogController } from './activity-events-log.controller';

describe('ActivityEventsLogController', () => {
  let controller: ActivityEventsLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityEventsLogController],
    }).compile();

    controller = module.get<ActivityEventsLogController>(
      ActivityEventsLogController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
