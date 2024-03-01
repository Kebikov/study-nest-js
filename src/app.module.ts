import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: +process.env.PORT,
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            entities: [User],
            synchronize: true,
        }),
        TaskModule,
        UserModule
    ],
	controllers: [AppController],
	providers: [AppService]
})


export class AppModule {
    constructor(private dataSource: DataSource) {}
}
