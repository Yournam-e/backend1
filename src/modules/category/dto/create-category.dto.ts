import { IsNotEmpty, IsOptional, IsString, isEmail, IsNumber } from "class-validator";
import User from "src/modules/users/entities/user.entity";

export class CreateCategoryDto{
    @IsString()
    @IsNotEmpty()
    title: string


    @IsOptional()
    user?: User
}