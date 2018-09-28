import { Controller, Get, Body, Post, Put, Param } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo } from './entity/photo.entity';

@Controller('photo')
export class PhotoController {
    
    constructor(private readonly photoService: PhotosService) { }

    @Post()
    async create(@Body() Photo) {
        this.photoService.create(Photo);
    }

    @Get()
    async findAll(): Promise<Photo[]> {
        return this.photoService.findAll();
    }

}
