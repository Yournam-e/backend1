import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import User from '../users/entities/user.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepositiry: Repository<Category>,
        @InjectRepository(User)
        private readonly userRepositiry: Repository<User>
    ){}

    async create(createCategoryDto: CreateCategoryDto, id:number ){
        const isExist = await this.categoryRepositiry.findBy({
            title: createCategoryDto.title
        })

        const isUserExist = await this.userRepositiry.findBy({
            id: id
        })


        if(isExist.length && !isUserExist.length){throw new BadRequestException('This category already exist or not created user!')}

        const newCategory = {
            title: createCategoryDto.title,
            user_id: id
        }

        return await this.categoryRepositiry.save(newCategory) 

    }
}
