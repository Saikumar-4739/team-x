// employee.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeNew {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @Column()
    position!: string;

  @Column()
    department!: string;

  @Column({ default: 'Active' })
    status!: string;

  @Column({ type: 'date', nullable: true })
    birthday!: string;
}
