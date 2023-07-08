import { Injectable } from '@nestjs/common';
import { users } from 'src/moks';



@Injectable()
export class UsersService {
    getAll() {
        return users
    }
}
