import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find()
    }

    async patchCurs() {
        const user = await this.userRepository.findOneBy({id: 1});
        if(user) {
            user.email = 'sdfs';
            await this.userRepository.save(user);
        }
        return 'ok'
    }

    async postEmail(email: string) {
        const user = await this.userRepository.findOneBy({id: 1});
        user.email = email;
        return await this.userRepository.save(user);
    }
}
