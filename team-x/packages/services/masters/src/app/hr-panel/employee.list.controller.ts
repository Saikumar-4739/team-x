// employee.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmployeeNew } from './employee-new-entity';
import { EmployeeServiceNew } from './employee.list.service';


@Controller('employees')
export class EmployeeControllerNew {
  constructor(private readonly employeeServiceNew: EmployeeServiceNew) {}

  @Get()
  getAllEmployees(): Promise<EmployeeNew[]> {
    return this.employeeServiceNew.findAll();
  }

  @Post()
  createEmployee(@Body() employee: EmployeeNew): Promise<EmployeeNew> {
    return this.employeeServiceNew.create(employee);
  }

  @Put(':id')
  updateEmployee(@Param('id') id: number, @Body() employee: Partial<EmployeeNew>): Promise<void> {
    return this.employeeServiceNew.update(id, employee);
  }

  @Delete(':id')
  deleteEmployee(@Param('id') id: number): Promise<void> {
    return this.employeeServiceNew.delete(id);
  }
}
