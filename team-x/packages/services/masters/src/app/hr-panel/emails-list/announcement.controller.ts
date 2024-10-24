// announcement.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  sendAnnouncement(@Body() body: { to: string; subject: string; message: string }) {
    return this.emailService.sendAnnouncementEmail(body.to, body.subject, body.message);
  }
}
