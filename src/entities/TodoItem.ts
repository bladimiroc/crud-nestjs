import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todoItem')
export class TodoItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isComplete: boolean;
}