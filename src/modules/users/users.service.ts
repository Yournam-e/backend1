import { Injectable } from '@nestjs/common';
import { users } from '../../moks/index';



@Injectable()
export class UsersService {
    getAll() {
        return users
    }
}
