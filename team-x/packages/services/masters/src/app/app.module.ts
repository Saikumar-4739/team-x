import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

import { EmployeeModule } from './employee-panel/employee.module'; // Employee Module
import { Employee } from './employee-panel/employee.entity'; // Employee Entity
import { HRPanelModule } from './hr-panel/hr.panel.module';
import { EmployeeNew } from './hr-panel/employee-new-entity';
import { Candidate } from './hr-panel/candidate.entity';
import { LeaveRequest } from './hr-panel/emails-list/leave-request.entity';

@Module({
  imports: [
    // Mailer Module configuration using Gmail
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',                // Gmail SMTP server
        port: 587,                             // Port for TLS
        secure: false,                         // Set to true for port 465
        auth: {
          user: 'ummidisettisai01@gmail.com',       // Your Gmail address
          pass: '9398544500',         // Your Gmail password or app password
        },
      },
      defaults: {
        from: '"HR Panel" <no-reply@gmail.com>', // Default sender email
      },
      template: {
        dir: join(__dirname, 'templates'),       // Directory for email templates
        adapter: new HandlebarsAdapter(),        // Using Handlebars for email templates
        options: {
          strict: true,
        },
      },
    }),

    // TypeOrm Module configuration with hardcoded MySQL settings
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',        // MySQL host
      port: 3306,               // MySQL port
      username: 'root',         // MySQL username
      password: '',             // MySQL password
      database: 'team-x',       // MySQL database name
      entities: [Employee, EmployeeNew, Candidate, LeaveRequest ],     // Entities to be managed by TypeORM
      synchronize: false,       // Set to false in production
    }),
    
    EmployeeModule, // Import Employee Module
    HRPanelModule,
  ],
})
export class AppModule {}
