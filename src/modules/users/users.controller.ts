import { Body, Controller, Get, Param, Post, Query, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateDto } from './dto/create-user.dto';

interface IUser {
    _id: string;
    index: number;
}

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService){

    }

    @Get('getOne')
    getOne(@Body() email: string){
        return this.UsersService.findOne(email)
    }

    @Post('create')
    @UsePipes(new ValidationPipe)
    create(@Body() createUserDto: CreateDto){
        return this.UsersService.addUser(createUserDto)
    }
}
