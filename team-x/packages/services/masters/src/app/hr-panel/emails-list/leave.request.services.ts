// leave-request.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveRequest } from './leave-request.entity';

@Injectable()
export class LeaveRequestService {
  constructor(
    @InjectRepository(LeaveRequest)
    private leaveRequestRepository: Repository<LeaveRequest>,
  ) {}

  findAll() {
    return this.leaveRequestRepository.find();
  }

  approveLeave(id: number) {
    return this.leaveRequestRepository.update(id, { status: 'Approved' });
  }

  rejectLeave(id: number) {
    return this.leaveRequestRepository.update(id, { status: 'Rejected' });
  }
}


