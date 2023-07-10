import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import * as argon2 from 'argon2'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}

    async validateUser(email: string, password: string){
        const user = await this.userService.findOne(email);
        const passwordIsMatch = await argon2.verify(user.password, password)

        if (user && passwordIsMatch) {
          return user;
        }

        throw new BadRequestException('User or password are incorrect')
      }

}



