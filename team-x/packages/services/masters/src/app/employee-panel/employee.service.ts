import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private employeeRepository: Repository<Employee>,
    ) {}

    async create(employeeData: Partial<Employee>): Promise<Employee> {
        const employee = this.employeeRepository.create(employeeData);
        return await this.employeeRepository.save(employee);
    }

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    async findOne(id: number): Promise<Employee> {
        const employee = await this.employeeRepository.findOne({ where: { id } });
        if (!employee) {
            throw new NotFoundException(`Employee with ID ${id} not found`);
        }
        return employee;
    }

    async update(id: number, employeeData: Partial<Employee>): Promise<Employee> {
        // Check if employee exists before updating
        const employee = await this.findOne(id);
        await this.employeeRepository.update(employee.id, employeeData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> { 
        const employee = await this.findOne(id);// Check if employee exists
        if (employee) {
            await this.employeeRepository.delete(id);
        } else {
            throw new NotFoundException(`Employee with ID ${id} not found`);
        }
    }
}
