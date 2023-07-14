import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
            user: { id: id },
            title: createCategoryDto.title
        })

        if(isExist.length){ throw new BadRequestException('this category alredy exist')}

        const newCategory = {
            title: createCategoryDto.title,
            user: {
                id: id
            }
        }

        return await this.categoryRepositiry.save(newCategory) 

    }


    async findAll(id: number){
        return this.categoryRepositiry.find({
            where:{
                user: {id}
            },
            relations: {
                transactions: true
            }
        })
    }


    async findOne(id: number){

        const isExist = await this.categoryRepositiry.findOne({
            where: {id},
            relations: {
                user: true
            }
        })

        if (!isExist) throw new NotFoundException('not found this category!')
        return isExist
    }
}
