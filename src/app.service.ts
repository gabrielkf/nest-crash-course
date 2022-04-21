import { Injectable } from '@nestjs/common';
import { AppConstants } from './app.constants';

@Injectable()
export class AppService {
  getHello(): string {
    return AppConstants.HealthCheck.Message;
  }
}
