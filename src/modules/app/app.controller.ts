import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('main')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get/:id')
  async getIt(@Param('id') id: string): Promise<string> {
    return await this.appService.getIs(id);
  }
  @Get('set/:id/:value')
  async setIt(@Param('id') id: string, @Param('value') value: string): Promise<string> {
    return this.appService.setHello(id, value);
  }
}
