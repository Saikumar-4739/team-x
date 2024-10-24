// email.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendAnnouncementEmail(to: string, subject: string, message: string): Promise<void> {
    await this.mailerService.sendMail({
      to: to,
      subject: subject,
      template: './announcement', // HTML template for announcements
      context: {
        message: message,
      },
    });
  }

  async sendWelcomeEmail(employeeName: string, to: string): Promise<void> {
    await this.mailerService.sendMail({
      to: to,
      subject: 'Welcome to the Company!',
      template: './welcome', // HTML template for welcome email
      context: {
        name: employeeName,
      },
    });
  }
}
