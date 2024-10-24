import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('example')
@Controller('example')
export class AppController {
  @Get()
  @ApiResponse({ status: 200, description: 'Successful response.' })
  getExample() {
    return { message: 'Hello from the Swagger API!' };
  }
}
