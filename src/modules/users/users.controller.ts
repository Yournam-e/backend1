import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

interface IUser {
    _id: string;
    index: number;
}

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService){

    }

    @Get('getAll')
    getUsers(){
        return this.UsersService.getAll()
    }
}
