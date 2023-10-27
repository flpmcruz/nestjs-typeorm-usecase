import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('numeric', {
    unique: true,
  })
  rec_id: number;

  @Column('text', {
    unique: true,
  })
  title: string;

  @Column('numeric')
  manufacturer_id: number;

  @Column('numeric')
  sales_team_id: number;

  @Column('text')
  sales_team_name: string;

  @Column('numeric')
  user_id: number;

  @Column('text')
  user_name: string;

  @Column('date')
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column('text', {
    nullable: true,
  })
  acjd_comment: string;
}
