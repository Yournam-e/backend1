import { Body, Controller, Param, Post, Req } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Post('/:id')
    create(@Body() CreateCategoryDto: CreateCategoryDto, @Param() params){
        return this.categoryService.create(CreateCategoryDto, params.id)
    }
}
