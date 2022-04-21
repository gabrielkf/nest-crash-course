import { AppConstants } from './app.constants';
import { Controller, Get } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health')
@Controller('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('check')
  @ApiOkResponse({
    description: AppConstants.HealthCheck.OkDescription,
  })
  @ApiInternalServerErrorResponse({
    description: AppConstants.HealthCheck.InternalServerErrorDescription,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
