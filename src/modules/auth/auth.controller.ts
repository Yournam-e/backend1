import { Controller, Request, Post, UseGuards, UseInterceptors, Get } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';


@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService){}
    
    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(@Request() req) {
      return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
