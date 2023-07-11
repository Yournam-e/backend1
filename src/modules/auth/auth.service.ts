import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';

@Injectable()
export class AuthService {
    constructor(
      private readonly userService: UsersService,
      private jwtService: JwtService
      ){}

    async validateUser(email: string, password: string){
        const user = await this.userService.findOne(email);
        const passwordIsMatch = await argon2.verify(user.password, password)
        if (user && passwordIsMatch) {
          return user;
        }
        throw new BadRequestException('user or password are incorrec')
      }

      async login(user: IUser) {

        const {id, email} = user

        return{
          id, 
          email, 
          token: this.jwtService.sign({id: user.id, email: user.email})
        }
      }

}



