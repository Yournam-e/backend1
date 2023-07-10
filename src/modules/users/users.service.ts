import { BadRequestException, Injectable } from '@nestjs/common';
import { users } from '../../moks/index';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create-user.dto';
import * as argon2 from 'argon2'



@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(User) private readonly userReposirory: Repository<User>){}

    async getOne() {
        
    }

    async addUser(createUserDto: CreateDto){
        const existUser = await this.userReposirory.findOne({
            where: {
                email: createUserDto.email,
            }
        })
        if(existUser) throw new BadRequestException('this email aready exist')

        const user = await this.userReposirory.save({
            email: createUserDto.email,
            password: await argon2.hash(createUserDto.password)
        })
        return {user}
    }
}
