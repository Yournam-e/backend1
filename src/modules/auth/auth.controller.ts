import { Controller, Request, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';


@Controller()
export class AuthController { 
    

    
    @Post('login')
    @UseInterceptors(LoggingInterceptor)
    @UseGuards(LocalAuthGuard)
    async login(@Request() req) {
      return req.user;
    }
}
