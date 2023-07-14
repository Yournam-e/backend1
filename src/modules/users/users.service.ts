import { BadRequestException, Injectable } from '@nestjs/common';
import { users } from '../../moks/index';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create-user.dto';
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class UsersService {
    
    constructor(private jwtService: JwtService, @InjectRepository(User) private readonly userReposirory: Repository<User>){}

    async findOne(email: string) {
        return await this.userReposirory.findOne({
            where: {
                email: email
            }
        })

      }

    async addUser(createUserDto: CreateDto){
        const existUser = await this.userReposirory.findOne({
            where: {
                email: createUserDto.email,
            }
        })
        if(existUser) throw new BadRequestException('this email aready exist')

        await this.userReposirory.save({
            email: createUserDto.email,
            password: await argon2.hash(createUserDto.password)
        })


        const newUser = await this.userReposirory.findOne({
            where: {
                email: createUserDto.email,
            }
        })

        
        return {
            id: newUser.id, 
            email: newUser.email, 
            token: this.jwtService.sign({id: newUser.id, email: newUser.email})
        }
    }
}
