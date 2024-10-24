import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    joiningDate!: Date;

    @Column({ nullable: true })
    mobileNumber?: string;

    @Column({ nullable: true })
    alternativeMobileNumber?: string;

    @Column({ nullable: true })
    qualification?: string;

    @Column({ nullable: true })
    learnedTechnologies?: string;

    @Column({ nullable: true })
    experience?: string;

    @Column({ nullable: true })
    currentCtc?: string;

    @Column({ nullable: true })
    noticePeriod?: string;

    @Column({ nullable: true })
    employeeCode?: string;

    @Column({ nullable: true })
    bankAccountNumber?: string;

    @Column({ nullable: true })
    ifscCode?: string;

    @Column({ nullable: true })
    branchName?: string;

    @Column({ nullable: true })
    aadharNumber?: string;

    @Column({ nullable: true })
    panNumber?: string;

    @Column({ nullable: true })
    passportNumber?: string;
}
