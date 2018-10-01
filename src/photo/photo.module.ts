import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './photo.controller';
import { PhotosService } from './photos.service';
import { PhotosResolvers } from './photo.resolvers';
import { Photo } from './photo.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Photo]),
    ],
    controllers: [PhotoController],
    providers: [PhotosService, PhotosResolvers]
})
export class PhotoModule { }
