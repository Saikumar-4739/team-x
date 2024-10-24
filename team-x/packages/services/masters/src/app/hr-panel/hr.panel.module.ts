import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './candidate.entity';
import { EmployeeNew } from './employee-new-entity';
import { LeaveRequest } from './emails-list/leave-request.entity';
import { LeaveRequestController } from './emails-list/leave-request.controller';
import { EmployeeControllerNew } from './employee.list.controller';
import { EmployeeServiceNew } from './employee.list.service';
import { LeaveRequestService } from './emails-list/leave.request.services';


@Module({
    imports: [TypeOrmModule.forFeature([Candidate, EmployeeNew, LeaveRequest])],
    controllers: [LeaveRequestController, EmployeeControllerNew],
    providers: [EmployeeServiceNew, LeaveRequestService],
})
export class HRPanelModule {}
