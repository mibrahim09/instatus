import { CreateEventCommand } from '../../dto/commands/create-event-command.dto';
import { PaginatedRequest } from '../../dto/requests/paginated.dto';
import { IActivityEventsLogRepository } from '../IActivityEventsLogRepository';
import { PrismaService } from '../../../../common/prisma/services/primsa.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivityEventsLogRepository
  implements IActivityEventsLogRepository
{
  constructor(private readonly prismaService: PrismaService) {}

  findAll(request: PaginatedRequest): Promise<any> {
    const { skip, filterString } = request.query();
    const { pageSize } = request;

    let whereCondition = {};
    if (filterString !== '') {
      whereCondition = {
        OR: [
          { actor_id: { contains: filterString } },
          { target_id: { contains: filterString } },
          {
            action: {
              name: { contains: filterString },
            },
          },
        ],
      };
    }

    return this.prismaService.activityLog.findMany({
      skip,
      take: Number(pageSize),
      where: whereCondition,
      include: {
        action: true,
        metadata: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async create(request: CreateEventCommand): Promise<void> {
    const {
      actor_id,
      actor_name,
      group,
      target_id,
      target_name,
      location,
      action,
      metadata,
    } = request;

    const data: Prisma.ActivityLogCreateInput = {
      actor_id,
      actor_name,
      group,
      target_id,
      target_name,
      location,
      action: { create: action },
      metadata: { create: metadata },
    };
    await this.prismaService.activityLog.create({ data });
  }
}
