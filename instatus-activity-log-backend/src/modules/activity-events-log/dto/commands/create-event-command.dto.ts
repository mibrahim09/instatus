import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

class ActionCreateCommand {
  @IsString()
  object: string;

  @IsString()
  name: string;
}

class MetadataCreateCommand {
  @IsString()
  redirect: string;
  @IsString()
  description: string;
  @IsString()
  x_request_id: string;
}

export class CreateEventCommand {
  @IsString()
  @IsNotEmpty()
  actor_id: string;

  @IsString()
  @IsNotEmpty()
  object: string;

  @IsString()
  @IsNotEmpty()
  actor_name: string;

  @IsString()
  @IsNotEmpty()
  group: string;

  @Type(() => ActionCreateCommand)
  @ValidateNested({ each: true })
  action?: ActionCreateCommand;

  @IsString()
  @IsNotEmpty()
  target_id: string;

  @IsString()
  @IsNotEmpty()
  target_name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @Type(() => MetadataCreateCommand)
  @ValidateNested({ each: true })
  metadata?: MetadataCreateCommand;
}
