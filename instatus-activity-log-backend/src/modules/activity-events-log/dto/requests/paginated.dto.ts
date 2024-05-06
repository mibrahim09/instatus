import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class PaginatedRequest {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  page: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  pageSize: number;

  @IsOptional()
  filter: string;

  query() {
    const skip = (this.page - 1) * this.pageSize;
    const filterString = this.filter ?? '';
    return { skip, filterString };
  }
}
