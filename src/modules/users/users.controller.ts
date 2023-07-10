import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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

    @Get('getAll')
    getOne(){
        return this.UsersService.getOne()
    }

    @Post('create')
    @UsePipes(new ValidationPipe)
    create(@Body() createUserDto: CreateDto){
        return this.UsersService.addUser(createUserDto)
    }
}
