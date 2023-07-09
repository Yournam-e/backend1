import { DogsService } from './dogs.service';
export declare class DogsController {
    private readonly DogsService;
    constructor(DogsService: DogsService);
    getDogs(): string;
}
