import { Controller, Get, Body, Post, Put, Param } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
    
    constructor(private readonly photosService: PhotosService) { }

    @Post()
    async create(@Body() Photo) {
        this.photosService.create(Photo);
    }

    @Get()
    async findAll(): Promise<Photo[]> {
        return this.photosService.findAll();
    }

}
