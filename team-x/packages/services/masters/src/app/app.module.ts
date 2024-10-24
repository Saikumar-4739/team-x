import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee-panel/employee.module';
import { Employee } from './employee-panel/employee.entity';

@Module({
    imports: [
        ConfigModule.forRoot(), 
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost', 
            port: 3306, 
            username: 'root', 
            password: '', 
            database: 'team-x',
            entities: [Employee],
            synchronize: false,
        }),
        EmployeeModule,
    ],
})
export class AppModule {}
