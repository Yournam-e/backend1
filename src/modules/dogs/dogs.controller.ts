import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('')
export class DogsController {

    constructor(private readonly DogsService: DogsService){

    }
    
    @Get('getDogs')
    getDogs(){
        return this.DogsService.getDogs()
    }
}
