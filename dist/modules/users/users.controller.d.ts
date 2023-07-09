import { UsersService } from './users.service';
export declare class UsersController {
    private readonly UsersService;
    constructor(UsersService: UsersService);
    getUsers(): {
        _id: string;
        index: number;
        guid: string;
        isActive: boolean;
        balance: string;
        picture: string;
        age: number;
        eyeColor: string;
        name: string;
        gender: string;
        company: string;
        email: string;
        phone: string;
        address: string;
        about: string;
        registered: string;
        latitude: number;
        longitude: number;
        tags: string[];
        friends: {
            id: number;
            name: string;
        }[];
        greeting: string;
        favoriteFruit: string;
    }[];
}
