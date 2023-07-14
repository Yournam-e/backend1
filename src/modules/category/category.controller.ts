import { Body, Controller, Get, Param, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Post('create')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    create(@Body() CreateCategoryDto: CreateCategoryDto, @Req() req){
        return this.categoryService.create(CreateCategoryDto, +req.user.id)
    }


    @Get('/findAll')
    @UseGuards(JwtAuthGuard)
    findAll(@Req() req){
        return this.categoryService.findAll(+req.user.id)
    }
    
    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param("id") id: number){
        return this.categoryService.findOne(id)
    }
}
