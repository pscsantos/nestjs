import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './photo.controller';
import { PhotosService } from './photos.service';
import { Photo } from './entity/photo.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Photo]),
    ],
    controllers: [PhotoController],
    providers: [PhotosService],
})
export class PhotoModule { }
