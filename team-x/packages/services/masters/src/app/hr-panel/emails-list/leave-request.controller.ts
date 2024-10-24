import { Controller, Get, Put, Param } from '@nestjs/common';
import { LeaveRequestService } from './leave.request.services';


@Controller('leave-requests')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

  @Get()
  getAllLeaveRequests() {
    return this.leaveRequestService.findAll();
  }

  @Put('approve/:id')
  approveLeave(@Param('id') id: number) {
    return this.leaveRequestService.approveLeave(id);
  }

  @Put('reject/:id')
  rejectLeave(@Param('id') id: number) {
    return this.leaveRequestService.rejectLeave(id);
  }
}