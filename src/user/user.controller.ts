import { Controller, Get, Patch, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers() {
        return this.userService.findAll();
    }

    @Patch()
    async patchCurs() {
        return this.userService.patchCurs();
    }

    @Post()
    async postEmail(@Body() email) {
        console.log(email);
        // return this.userService.postEmail(email);
        return 'ok'
    }
}
