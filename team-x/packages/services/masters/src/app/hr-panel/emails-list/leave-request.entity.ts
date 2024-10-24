// leave-request.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LeaveRequest {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    employeeId!: number;

  @Column({ type: 'date' })
    startDate!: string;

  @Column({ type: 'date' })
    endDate!: string;

  @Column({ default: 'Pending' })
    status!: string;
}
