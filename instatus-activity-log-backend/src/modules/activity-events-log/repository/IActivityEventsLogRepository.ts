import { PaginatedRequest } from '../dto/requests/paginated.dto';
import { CreateEventCommand } from '../dto/commands/create-event-command.dto';

export interface IActivityEventsLogRepository {
  findAll(request: PaginatedRequest): Promise<any>;
  create(request: CreateEventCommand): Promise<void>;
}
export const IActivityEventsLogRepository = Symbol(
  'IActivityEventsLogRepository',
);
