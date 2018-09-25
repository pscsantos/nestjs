import { Module } from '@nestjs/common';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { Photo } from './entitys/photo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Photo])],
    controllers: [PhotoController],
    providers: [PhotoService],
})
export class PhotoModule { }
