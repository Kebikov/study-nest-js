import { IsString } from "class-validator";

export class TaskDto {

    // @IsString({message: 'Имя должно быть строкой!'})
    // name: string;

    @IsString()
    name: string;

}
