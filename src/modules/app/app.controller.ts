import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('main')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get')
  async getIt(): Promise<string> {
    return await this.appService.getIs();
  }
  @Get('set')
  async setIt(): Promise<string> {
    return this.appService.setHello();
  }
}
