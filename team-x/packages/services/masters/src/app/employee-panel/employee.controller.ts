import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    async create(@Body() employeeData: Partial<Employee>): Promise<Employee> {
        return this.employeeService.create(employeeData);
    }

    @Get('/allemployees')
    async findAll(): Promise<Employee[]> {
        return this.employeeService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Employee> {
        return this.employeeService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() employeeData: Partial<Employee>): Promise<Employee> {
        return this.employeeService.update(id, employeeData);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.employeeService.remove(id);
    }
}
