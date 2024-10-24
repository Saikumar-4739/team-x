// employee.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeNew } from './employee-new-entity';


@Injectable()
export class EmployeeServiceNew {
  constructor(
    @InjectRepository(EmployeeNew)
    private employeeRepository: Repository<EmployeeNew>,
  ) {}

  async findAll(): Promise<EmployeeNew[]> {
    return await this.employeeRepository.find();
  }

  async create(employee: EmployeeNew): Promise<EmployeeNew> {
    return await this.employeeRepository.save(employee);
  }

  async update(id: number, updatedData: Partial<EmployeeNew>): Promise<void> {
    await this.employeeRepository.update(id, updatedData);
  }

  async delete(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
