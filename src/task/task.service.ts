import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {

    private TASKS = [
        {
            id: 0,
            name: 'Record a video)...',
            isDone: false
        }
    ];

    getAll() {
        return this.TASKS;
    }

    create(dto: TaskDto) {
        this.TASKS.push({
            id: this.TASKS.length,
            isDone: false,
            name: dto.name
        });

        return this.TASKS;
    }

    toggleDone(id: string) {
        const task = this.TASKS.find(item => item.id === Number(id));
        task.isDone = !task.isDone;
        return task;
    }

}
