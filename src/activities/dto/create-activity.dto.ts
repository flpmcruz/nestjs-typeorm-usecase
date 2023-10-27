import { IsNumber, IsString, IsPositive, IsOptional } from 'class-validator';

export class CreateActivityDto {
  @IsNumber()
  rec_id: number;

  @IsString()
  title: string;

  @IsNumber()
  @IsPositive()
  manufacturer_id: number;

  @IsNumber()
  @IsPositive()
  sales_team_id: number;

  @IsString()
  sales_team_name: string;

  @IsNumber()
  @IsPositive()
  user_id: number;

  @IsString()
  user_name: string;

  @IsString()
  created_at: Date;

  @IsString()
  updated_at: Date;

  @IsString()
  @IsOptional()
  acjd_comment?: string;
}
