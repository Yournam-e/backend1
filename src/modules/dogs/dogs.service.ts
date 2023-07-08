import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    getDogs() : string{
        return 'lol im not have a dog'
    }
}
